import { useState } from 'react';
import { Input, Label, Container, Icon } from "./styled";

type Props = {
   title?: string;
   placeholder?: string;
   id: string;
   type: React.HTMLInputTypeAttribute
   reference: any;
   autoComplete?: boolean;
   iconSource?: string;
}

export function InputItem({ title, placeholder, id, type, reference, autoComplete, iconSource }: Props) {

   const [isFocused, setIsFocused] = useState<boolean>(false);

   const handleActiveAnimation = () => {
      setIsFocused(prev => !prev);
   }

   return (
      <Container>
         {
            title &&
            <Label htmlFor={id}>
               {title}
            </Label>
         }
         <Input
            type={type}
            id={id}
            ref={reference}
            placeholder={placeholder}
            onFocus={handleActiveAnimation}
            onBlur={handleActiveAnimation}
            autoComplete={!autoComplete ? id : 'off'}
         />
         <Icon src={iconSource} alt={'icon'} active={isFocused} />
      </Container>
   )
}