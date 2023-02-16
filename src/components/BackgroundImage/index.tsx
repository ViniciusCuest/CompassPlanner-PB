import { Container, Image, Logo, UolImage } from './styled';

type Props = {
   logo?: string | undefined;
   background: string | undefined;
   page?: string
}

export function BackgroundImage({ background, logo, page }: Props) {
   return (
      <Container>
         {
            !!page ? <UolImage
               src={background}
               alt='Uol-logo'
            />
               :
               <>
                  <Logo 
                     draggable={false}
                     onClick={() => window.location.href = 'https://compass.uol/pt/home/'}
                     src={logo} 
                     alt="CompassUOL-logo" 
                  />
                  <Image
                     src={background}
                     alt="CompassUOL-image"
                  />

               </>
         }

      </Container>
   );
}