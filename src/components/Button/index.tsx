import { Container } from './styled';

type Props = {
   title: string
   onPress: any;
}

export function Button({ title, onPress }: Props) {
   return (
      <Container onClick={onPress}>
         {
            title
         }
      </Container>
   );
}