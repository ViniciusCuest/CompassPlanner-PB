import { fonts } from "../../global/theme";

import logoutLogo from '../../assets/icon-arrow-right.svg';
import cloudy from '../../assets/cloudy.svg';

import { Description, Title } from "../Texts";
import { Badge, Container, Date as DateComp, DateTime, Hour, Icon, LocationTemperature, Logo, Logout, LogoutButton } from "./styled";
import { useAuth } from "../../hooks/AuthConext";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

type Props = {
   logo: string;
   data: any;
}

export function Header({ logo, data }: Props): JSX.Element {

   const { handleLogOut, userData } = useAuth();
   const [hour, setHour] = useState<string>(`${format(new Date(), 'HH:mm')}`);

   useEffect(() => {
      let time = setInterval(() => {
         setHour(`${format(new Date(), 'HH:mm')}`);
      }, 1000);

      return () => {
         clearInterval(time);
      }
   }, []);

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
                     hour.padEnd(hour.length - 1, '0')
                  }
               </Hour>
               <DateComp>
                  {
                     format(new Date(), 'MMMM do, yyyy')
                  }
               </DateComp>
            </DateTime>
            <DateTime>
               <DateComp>
                  {userData.city ? `${userData.city} - São Paulo` : 'São Paulo - São Paulo'}
               </DateComp>
               <LocationTemperature>
                  <Icon src={cloudy} />
                  {
                     Number(data?.main?.temp).toFixed(0) + '°'
                  }
               </LocationTemperature>
            </DateTime>
         </div>
         <Logout>
            <Logo src={logo} onClick={() => window.location.href = 'https://compass.uol/pt/home/'}/>
            <LogoutButton onClick={handleLogOut}>
               <Icon src={logoutLogo}></Icon>
               Logout
            </LogoutButton>
         </Logout>
      </Container>
   );
}