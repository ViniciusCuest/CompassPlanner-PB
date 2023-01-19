import { fonts } from "../../global/theme";

import logoutLogo from '../../assets/icon-arrow-right.svg';

import { Description, Title } from "../Texts";
import { Badge, Container, Date as DateComp, DateTime, Hour, Icon, LocationTemperature, Logo, Logout, LogoutButton } from "./styled";
import { useAuth } from "../../hooks/AuthConext";
import { useEffect, useState } from "react";

type Props = {
   logo: string;
   data: unknown;
}

export function Header({ logo, data }: Props): JSX.Element {

   const { handleLogOut } = useAuth();

   const [date, setDate] = useState<Date>(new Date());
   const [hour, setHour] = useState<string>(`${new Date().getHours()}:${new Date().getMinutes()}`);

      useEffect(() => {
         let time = setInterval(() => {
            setHour(`${new Date().getHours()}:${new Date().getMinutes()}`);
         }, 1000);

         return () => {
            clearInterval(time);
         }
      }, [])

   return (
      <Container>
         <Badge>
            <Title style={{ fontSize: 22, fontWeight: fonts.bold }}>
               Weekly Planner
            </Title>
            <Description style={{ fontSize: 20 }}>
               Use this planner to organize your daily issues.
            </Description>
         </Badge>
         <div style={{ display: 'flex', flexDirection: 'row', width: '30%', justifyContent: "space-between", marginLeft: '-10%' }}>
            <DateTime>
               <Hour>
                  {
                     hour
                  }
               </Hour>
               <DateComp>
                  {
                     date.getMonth().toString() + '   ' + date.getDate() + '   ' + date.getFullYear()
                  }
               </DateComp>
            </DateTime>
            <DateTime>
               <Hour>
                  10:58
               </Hour>
               <DateComp>
                  November 22th, 2022
               </DateComp>
            </DateTime>
         </div>
         {
            /*
                     <LocationTemperature>
            <Hour>
               10:58
            </Hour>
            <Date>
               November 22th, 2022
            </Date>
         </LocationTemperature>
            */
         }
         <Logout>
            <Logo src={logo} />
            <LogoutButton onClick={handleLogOut}>
               <Icon src={logoutLogo}></Icon>
               Logout
            </LogoutButton>
         </Logout>
      </Container>
   );
}