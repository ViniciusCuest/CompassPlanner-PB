import { fonts } from "../../global/theme";

import logoutLogo from '../../assets/icon-arrow-right.svg';

import { Description, Title } from "../Texts";
import { Badge, Container, Date, DateTime, Hour, Icon, LocationTemperature, Logo, Logout, LogoutButton } from "./styled";

type Props = {
   logo: string;
}

export function Header({ logo }: Props): JSX.Element {
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
         <div style={{display: 'flex', flexDirection: 'row', width: '30%', justifyContent: "space-between", marginLeft: '-10%'}}>
            <DateTime>
               <Hour>
                  10:58
               </Hour>
               <Date>
                  November 22th, 2022
               </Date>
            </DateTime>
            <DateTime>
               <Hour>
                  10:58
               </Hour>
               <Date>
                  November 22th, 2022
               </Date>
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
            <LogoutButton>
               <Icon src={logoutLogo}></Icon>
               Logout
            </LogoutButton>
         </Logout>
      </Container>
   );
}