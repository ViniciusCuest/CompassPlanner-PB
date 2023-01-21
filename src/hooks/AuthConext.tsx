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
   lat?: string;
   long?: string;
}

type AuthContextProps = {
   userData: UserProps;
   isLogged: boolean;
   isLoading: boolean;
   handleLogIn: (user: string, pass: string) => void;
   handleLogOut: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: Props) {

   const userSavedData: string = String(localStorage.getItem('user'));
   const navigate = useNavigate();

   const [userData, setUserData] = useState<UserProps | any>({});
   const [position, setPosition] = useState<any>({});
   const [isLogged, setIsLogged] = useState<boolean>(userSavedData !== 'null' ? true : false);
   const [isLoading, setIsLoading] = useState<boolean>(false);

   useEffect(() => {
      if (userSavedData !== 'null')
         setIsLogged(true);

      let positionObj = {};

      navigator.geolocation.getCurrentPosition((coords) => {
         positionObj = { lat: coords?.coords?.latitude, long: coords?.coords?.longitude }
         setPosition(positionObj);
      }, (e) => {
         setPosition({});
      }, {
         enableHighAccuracy: true,
      });
   }, []);

   const handleLogIn = (user: string, pass: string) => {
      setIsLoading(true);

      const localUserData: UserProps = JSON.parse(userSavedData);

      if (!localUserData)
         throw new Error(`There's no DB connection`);

      if (!(user === localUserData.fullName.trim() && pass === localUserData.password) && !(user === localUserData.email.trim() && pass === localUserData.password))
         throw new Error(
            `Wow, invalid username or password.
            Please, try again!`);

      setUserData({ ...localUserData, position } as UserProps);
      setIsLogged(true);
      navigate('/');
   }

   const handleLogOut = () => {
      localStorage.removeItem('user');
      setUserData({});
      setIsLogged(false);
      navigate('/');
   }

   return (
      <AuthContext.Provider value={{
         userData,
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