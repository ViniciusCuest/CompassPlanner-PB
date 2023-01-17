import { Container, Image, Logo, UolImage } from './styled';

type Props = {
   logo?: string | undefined;
   background: string | undefined;
   page?: string
}

export function BackgroundImage({ background, logo, page }: Props) {
   return (
      <Container onDragStart={() => { return }}>
         {
            !!page ? <UolImage
               src={background}
               alt='Uol-logo'
            />
               :
               <>
                  <Logo src={logo} alt="CompassUOL-logo" />
                  <Image
                     src={background}
                     alt="CompassUOL-image"
                  />

               </>
         }

      </Container>
   );
}