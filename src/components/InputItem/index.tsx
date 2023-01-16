import { Input, Label } from "./styled";

type Props = {
   title: string;
   placeholder?: string;
   id: string;
   type: React.HTMLInputTypeAttribute
   reference: any;
}

export function InputItem({ title, placeholder, id, type, reference } : Props) {
   return (
      <Label htmlFor={id}>
         { title }
         <Input 
            type={type}
            id={id} 
            ref={reference} 
            placeholder={placeholder}
         />
      </Label>
   )
}