import { useRef } from 'react';

import { Background } from "../../components/Background";
import { InputItem } from "../../components/InputItem";
import { Description, Title } from "../../components/Texts";
import { Form } from '../../components/Form';
import { Wrapper } from './styled';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';

import mainImage from '../../assets/image-2.jpg';
import logo from '../../assets/compass-logo.png';

export default function Register() {
   const navigate = useNavigate();

   const firstName = useRef<HTMLInputElement>(null);
   const lastName = useRef<HTMLInputElement>(null);
   const birthDate = useRef<HTMLInputElement>(null);
   const country = useRef<HTMLInputElement>(null);
   const city = useRef<HTMLInputElement>(null);
   const email = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);
   const passwordRep = useRef<HTMLInputElement>(null);

   const handleSubmitForm = (event: UIEvent) => {
      event.preventDefault();

      if (String(firstName.current?.value).length < 3 || String(lastName.current?.value).length < 3
         || String(country.current?.value).length < 3 || String(email.current?.value).length < 3 || String(password.current?.value).length < 3
         || String(passwordRep.current?.value).length < 3 || (String(password.current?.value) !== String(passwordRep.current?.value))
      )
         throw new Error('Usuário inválido');

      localStorage.setItem('user', JSON.stringify({
         fullName: `${firstName.current?.value} ${lastName.current?.value}`,
         birthDate: birthDate.current?.value,
         country: country.current?.value,
         city: city.current?.value,
         email: email.current?.value,
         password: password.current?.value,
      }));
      navigate('/');
   }

   return (
      <Background
         currentPage='Register'
         background={mainImage}
         logo={logo}
      >
         <Wrapper>
            <Title>Welcome,</Title>
            <Description style={{ marginBottom: 30 }}>Please, register to continue</Description>
            <Form>
               <InputItem
                  type="text"
                  reference={firstName}
                  title="First name"
                  placeholder="Your first name"
                  id="yourfirstName"
               />
               <InputItem
                  type="text"
                  reference={lastName}
                  title="Last name"
                  placeholder="Your last name"
                  id="yourlastName"
               />
               <InputItem
                  type={'date'}
                  reference={birthDate}
                  title="Birth date"
                  placeholder="MM/DD/YYYY"
                  id="birthDate"
                  style={{appearance: 'none'}}
               />
               <InputItem
                  type="text"
                  reference={country}
                  title="Country"
                  placeholder="Your Country"
                  id="yourcountry"
               />
               <InputItem
                  type="text"
                  reference={city}
                  title="City"
                  placeholder="Your City"
                  id="yourcity"
               />
               <InputItem
                  type="email"
                  reference={email}
                  title="e-mail"
                  placeholder="A valid e-mail here"
                  id="youremail"
               />
               <InputItem
                  type="password"
                  reference={password}
                  title="password"
                  placeholder="Your password"
                  id="password"
               />
               <InputItem
                  type="password"
                  reference={passwordRep}
                  title="password"
                  placeholder="Confirm your password"
                  id="passwordRep"
               />
               <Button
                  title={'Register Now'}
                  onPress={handleSubmitForm}
               />
               <Link to={'/Login'} style={{ textDecoration: 'none', marginTop: 10 }}><Description>If you already have an account, click here!</Description></Link>
            </Form>
         </Wrapper>
      </Background>
   )
}