import { Button, ButtonsArea, Container, FadeBackground, Header, IconButton, Title } from "./styled";
import { IoClose } from 'react-icons/io5';
import { colors } from "../../global/theme";

type Props = {
   active: boolean;
   message: string;
   refNode: any
   onActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
   options: any[];
}

export function Modal({ active, onActiveModal, options, refNode, message }: Props) {
   return (
      <FadeBackground 
         ref={refNode}
         active={active}
      >
         <Container active={active}>
            <Header>
               <Title>Dialog</Title>
               <IconButton onClick={() => onActiveModal(false)}>
                  <IoClose size={35} />
               </IconButton>
            </Header>
            {
               message
            }
            <ButtonsArea>
               {
                  options.map((item, id) => {
                     return (
                        <Button
                           key={id}
                           onClick={item.action}
                           style={{ backgroundColor: item.type === 'delete' ? colors.delete : '#e0e0e0' }}
                        >
                           {
                              item.title
                           }
                        </Button>
                     );
                  })
               }
            </ButtonsArea>

         </Container>
      </FadeBackground>
   )
}