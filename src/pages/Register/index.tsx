import { useRef, useEffect } from 'react';

import { Background } from "../../components/Background";
import { InputItem } from "../../components/InputItem";
import { Description, Title } from "../../components/Texts";

export default function Register() {
   const firstName = useRef<HTMLInputElement>(null);
   const lastName = useRef<HTMLInputElement>(null);
   const birthDate = useRef<HTMLInputElement>(null);
   const country = useRef<HTMLInputElement>(null);
   const city = useRef<HTMLInputElement>(null);
   const email = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);
   const PasswordRep = useRef<HTMLInputElement>(null);

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