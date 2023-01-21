import { Border, Container, Description, BadgeButton } from "./styled";

type Props = {
   description: string,
   borderStyle: React.CSSProperties;
   deleteItem: () => void;
}

export function TaskItem({ description, borderStyle, deleteItem }: Props) {
   return (
      <Container>
         <Border style={borderStyle} />
         <Description>
            {
               description
            }
         </Description>
         <BadgeButton onClick={deleteItem}>
            Delete
         </BadgeButton>
      </Container>
   );
}