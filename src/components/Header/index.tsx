import { fonts } from "../../global/theme";

import logoutLogo from '../../assets/icon-arrow-right.svg';

import { Description, Title } from "../Texts";
import { Badge, Container, DateTime, Icon, LocationTemperature, Logo, Logout, LogoutButton } from "./styled";

type Props = {
   logo: string;
}

export function Header({ logo }: Props) {
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
         <DateTime>

         </DateTime>
         <LocationTemperature>

         </LocationTemperature>
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