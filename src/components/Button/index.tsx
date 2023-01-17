import { colors } from '../../global/theme';
import { Container, Shadow, ActionButton } from './styled';

type Props = {
   title?: string
   children?: React.ReactNode;
   style?: React.CSSProperties;
   onPress: any;
   type?: string;
   add?: boolean;
}

export function Button({ title, style, onPress, type, children, add }: Props) {

   if (type?.toLowerCase() === 'action') {
      return (
         <ActionButton
            onClick={onPress}
            style={{ backgroundColor: add ? colors.green_jade : colors.orange800 }}
         >
            {
               children
            }
         </ActionButton>
      )
   }

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