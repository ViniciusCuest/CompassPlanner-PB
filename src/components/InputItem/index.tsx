import { Input, Label, Container } from "./styled";

type Props = {
   title: string;
   placeholder?: string;
   id: string;
   type: React.HTMLInputTypeAttribute
   reference: any;
   autoComplete?: boolean;
}

export function InputItem({ title, placeholder, id, type, reference, autoComplete}: Props) {
   return (
      <Container>
         <Label htmlFor={id}>
            {title}
         </Label>
         <Input
            type={type}
            id={id}
            ref={reference}
            placeholder={placeholder}
            autoComplete={!autoComplete ? id : 'off'}
         />
      </Container>
   )
}