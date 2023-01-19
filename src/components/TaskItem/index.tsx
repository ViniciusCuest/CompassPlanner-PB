import { Border, Container, Description, BadgeButton } from "./styled";

type Props = {
   description: string,
   borderStyle: React.CSSProperties
}

export function TaskItem({ description, borderStyle }: Props) {
   return (
      <Container>
         <Border style={borderStyle} />
         <Description>
            {
               description
            }
         </Description>
         <BadgeButton>
            Delete
         </BadgeButton>
      </Container>
   );
}