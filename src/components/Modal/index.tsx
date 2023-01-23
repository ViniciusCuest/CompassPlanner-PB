import { Button, ButtonsArea, Container, Header, IconButton, Title } from "./styled";
import { IoCloseSharp } from 'react-icons/io5';
import { colors } from "../../global/theme";

type Props = {
   active: boolean;
   onActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
   options: any[];
   action: React.Dispatch<React.SetStateAction<boolean>>
}

export function Modal({ active, onActiveModal, options, action }: Props) {
   return (
      <Container active={active}>
         <Header>
            <Title>Are you sure ?</Title>
            <IconButton onClick={() => onActiveModal(false)}>
               <IoCloseSharp size={40} />
            </IconButton>
         </Header>
         <ButtonsArea>
            {
               options.map((item, id) => {
                  return (
                     <Button
                        key={id}
                        onClick={item.action}
                        style={{ backgroundColor: item.type === 'delete' ? colors.red : '' }}
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
   )
}