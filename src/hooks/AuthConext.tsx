import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {
   children: React.ReactNode;
}

type UserProps = {
   fullName: string;
   birthDate: string;
   country: string;
   city: string;
   email: string;
   password: string;
}

type AuthContextProps = {
   isLogged: boolean;
   isLoading: boolean;
   handleLogIn: (user: string, pass: string) => void;
   handleLogOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: Props) {

   const userSavedData: string = String(localStorage.getItem('user'));
   const navigate = useNavigate();

   const [isLogged, setIsLogged] = useState<boolean>(userSavedData !== 'null' ? true : false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
      if (userSavedData !== 'null')
         setIsLogged(true);
   }, []);

   const handleLogIn = (user: string, pass: string) => {
      setIsLoading(true);

      const userData: UserProps = JSON.parse(userSavedData);

      if (!userData)
         throw new Error(`There's no DB connection`)

      console.log(userData.email, user);
      console.log(userData.password, pass);

      if (!(user === userData.fullName && pass === userData.password) && !(user === userData.email && pass === userData.password))
         throw new Error(
            `Wow, invalid username or password.
            Please, try again!`);

      setIsLogged(true);
      navigate('/');
   }

   const handleLogOut = () => {
      localStorage.removeItem('user');
      setIsLogged(false);
      navigate('/');
   }

   return (
      <AuthContext.Provider value={{
         isLogged,
         isLoading,
         handleLogIn,
         handleLogOut
      }}>
         {
            children
         }
      </AuthContext.Provider>
   );
}

export function useAuth() {
   const context = useContext(AuthContext);
   return context
}