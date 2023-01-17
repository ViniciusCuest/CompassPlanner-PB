import { Container, Shadow } from './styled';

type Props = {
   title: string
   style?: React.CSSProperties;
   onPress: any;
}

export function Button({ title, style, onPress }: Props) {
   return (
      <Shadow style={style}>
         <Container onClick={onPress}>
            {
               title
            }
         </Container>
      </Shadow>
   );
}