import { colors } from '../../global/theme';
import { Loading } from '../Loading';
import { Container, Shadow, ActionButton } from './styled';

type Props = {
   title?: string
   children?: React.ReactNode;
   style?: React.CSSProperties;
   onPress: any;
   type?: string;
   add?: boolean;
   disable?: boolean;
   loading?: boolean;
}

export function Button({ title, style, onPress, type, children, add, disable, loading }: Props) {

   if (type?.toLowerCase() === 'action') {
      return (
         <ActionButton
            disabled={disable}
            onClick={onPress}
            style={{
               opacity: disable ? .8 : 1,
               backgroundColor: add ? colors.green_jade : colors.orange800,
               justifyContent: add ? 'space-between' : 'center',
               gap: add ? 0 : 8
            }}
         >
            {
               children
            }
         </ActionButton>
      )
   }

   return (
      <Shadow style={style}>
         <Container 
            disabled={disable}
            onClick={onPress}
         >
            {
               loading ?
                  <Loading style={{ opacity: 1 }} />
                  :
                  title
            }
         </Container>
      </Shadow>
   );
}