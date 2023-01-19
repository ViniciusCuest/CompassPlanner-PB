import { ReactNode } from 'react';
import { BackgroundImage } from '../BackgroundImage';
import { Container, DashboardContainer } from './styled';



type objProps = {
   login: JSX.Element
   register: JSX.Element
   dashboard: JSX.Element
}

type Props = {
   children: ReactNode,
   currentPage?: string;
   background?: string;
   logo?: string;
}
   
export function Background({ children, currentPage = 'login' || 'register', background, logo}: Props) {
   const components: objProps | any = {
      login:
         <Container>
            {
               children
            }
            <BackgroundImage logo={logo} background={background} />
         </Container>,
      register:
         <Container>
            {
               children
            }
            <BackgroundImage logo={logo} background={background} />
         </Container>,
      dashboard:
         <DashboardContainer style={{overflow: 'hidden'}} img={background}>
            {
               children
            }
         </DashboardContainer>
   }; 

   return components[currentPage.toLowerCase()];

}