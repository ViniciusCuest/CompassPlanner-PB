import { Border, Container, Description, BadgeButton, InvisibleText } from "./styled";

type Props = {
   description?: string;
   loading?: boolean;
   borderStyle: React.CSSProperties;
   deleteItem?: () => void;
}

export function TaskItem({ description, borderStyle, deleteItem, loading }: Props) {
   return (
      <Container load={!!loading}>

         {
            !!loading ?
               <>
                  <InvisibleText 
                     style={{marginTop: 20}}
                     load
                  />
                  <InvisibleText
                     style={{marginTop: 45, width: '45%'}} 
                     load
                  />
               </>
               :
               <Description>
                  {
                     description
                  }
               </Description>
         }
         <BadgeButton
            load={!!loading}
            onClick={deleteItem}
         >
            {
               !!loading ?
                  ''
                  :
                  'Delete'
            }

         </BadgeButton>
      </Container>
   );
}