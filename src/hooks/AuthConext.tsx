import axios, { AxiosResponse } from "axios";
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
   token: string;
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
      if (userSavedData !== 'null') {
         setIsLogged(true);
         setUserData(userSavedData);
      }

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

   const handleLogIn = async (user: string, pass: string) => {
      setIsLoading(true);

      const response = await axios.post('https://latam-challenge-2.deta.dev/api/v1/users/sign-in',
         {
            email: user,
            password: pass
         }, {
         headers: { 'Content-Type': 'application/json' }
      });

      if (response.status == 200) {
         setUserData({
            ...response.data?.user,
            token: response?.data?.token
         });

         localStorage.setItem("@Compass-planner:user", JSON.stringify(response.data?.user));
         localStorage.setItem("@Compass-planner:token", response.data.token);

         navigate('/');
         setIsLogged(true);
         setIsLoading(false);
         return;
      }

      setIsLoading(false);

      /*
               .then((response: AxiosResponse) => {
      
                  console.log(response);
      
                  if (response.status === 200) {
      
                  }
      
               }).catch((err: any) => {
                  throw new Error(err);
               }).finally(() => {
                  setIsLoading(false);
               }) */

      //const localUserData: UserProps = JSON.parse(userSavedData);
      /*
      if (!localUserData)
         throw new Error(`There's no DB connection`);

      if (!(user === localUserData.fullName.trim() && pass === localUserData.password) && !(user === localUserData.email.trim() && pass === localUserData.password))
         throw new Error(
            `Wow, invalid username or password.
            Please, try again!`);

      setUserData({ ...localUserData, position } as UserProps);
      */
   }

   const handleLogOut = () => {
      localStorage.removeItem('@Compass-planner:user');
      localStorage.removeItem('@Compass-planner:token');
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