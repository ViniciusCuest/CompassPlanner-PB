import { Container, Image, Logo } from './styled';

type Props = {
   logo: string
   background: string
}

export function BackgroundImage ({ background, logo } : Props) {
   return (
      <Container onDragStart={() => { return }}>
         <Logo src={logo}/>
         <Image src={background} alt="CompassUOL"/>
      </Container>
   );
}