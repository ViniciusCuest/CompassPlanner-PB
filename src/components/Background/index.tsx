import { ReactNode } from 'react';
import { BackgroundImage } from '../BackgroundImage';
import { Container } from './styled';

import mainImage from '../../assets/image-2.jpg';
import logo from '../../assets/compass-logo.png';

type Props = {
   children: ReactNode
}

export function Background({ children }: Props) {

   return (
      <Container>
         {
            children
         }
         <BackgroundImage logo={logo} background={mainImage}/>
      </Container>
   )
}