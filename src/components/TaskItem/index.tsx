import { Border, Container, Description, BadgeButton } from "./styled";

type Props = {
   description: string
}

export function TaskItem({ description }: Props) {
   return (
      <Container>
         <Border />
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