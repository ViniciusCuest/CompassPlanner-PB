import { useState } from 'react';
import { colors } from '../../global/theme';
import { Input, Label, Container, Icon } from "./styled";

type Props = {
   title?: string;
   placeholder?: string;
   id: string;
   type: React.HTMLInputTypeAttribute
   reference: any;
   autoComplete?: boolean;
   style?: React.CSSProperties;
   iconSource?: string;
   error?: boolean;
   handleError?: React.Dispatch<React.SetStateAction<string>> | undefined;
}

export function InputItem({ title, placeholder, id, type, reference, autoComplete, style, iconSource, error, handleError }: Props) {

   const [isFocused, setIsFocused] = useState<boolean>(false);

   const handleActiveAnimation = () => {
      if (error && handleError)
         handleError('');

      setIsFocused(prev => !prev);
   }

   return (
      <Container>
         {
            title &&
            <Label htmlFor={id}>
               {
                  title
               }
            </Label>
         }
         <Input
            errorStyle={!!error}
            style={style}
            type={type}
            id={id}
            ref={reference}
            placeholder={placeholder}
            onFocus={handleActiveAnimation}
            onBlur={handleActiveAnimation}
            autoComplete={!autoComplete ? id : 'off'}
         />
         {
            !!iconSource &&
            <Icon src={iconSource} alt={'icon'} active={isFocused} />
         }
      </Container>
   )
}