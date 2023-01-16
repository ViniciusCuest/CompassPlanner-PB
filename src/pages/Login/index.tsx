import { useRef, useEffect } from 'react';

import { Background } from "../../components/Background";
import { InputItem } from "../../components/InputItem";
import { Description, Title } from "../../components/Texts";

export default function Login() {
   const firstName = useRef<HTMLInputElement>(null);

   useEffect(() => {
      console.log(firstName.current?.value); 
   });

   return (
      <Background>
         <section>
            <Title>Welcome,</Title>
            <Description>Please, register to continue</Description>
            <InputItem 
               type="text"
               reference={firstName}
               title="First name"
               placeholder="Your first name"
               id="firstName"
            />
         </section>
      </Background>
   )
}