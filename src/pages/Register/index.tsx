import { useRef } from 'react';

import { Background } from "../../components/Background";
import { InputItem } from "../../components/InputItem";
import { Description, Title } from "../../components/Texts";
import { Form } from '../../components/Form';
import { Wrapper } from './styled';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import mainImage from '../../assets/image-2.jpg';
import logo from '../../assets/compass-logo.png';
import { API_LATAM } from '../../utils/api';

export default function Register() {

   const firstName = useRef<HTMLInputElement>(null);
   const lastName = useRef<HTMLInputElement>(null);
   const birthDate = useRef<HTMLInputElement>(null);
   const country = useRef<HTMLInputElement>(null);
   const city = useRef<HTMLInputElement>(null);
   const email = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);
   const confirmPassword = useRef<HTMLInputElement>(null);

   const handleSubmitForm = async (event: UIEvent) => {
      event.preventDefault();
      //throw new Error('Usuário inválido');

      await API_LATAM.post('/users/sign-up', {
         firstName: firstName.current?.value,
         lastName: lastName.current?.value,
         birthDate: birthDate.current?.value,
         city: city.current?.value,
         country: country.current?.value,
         email: email.current?.value,
         password: password.current?.value,
         confirmPassword: confirmPassword.current?.value,
      }, {
         headers: { 'Content-Type': 'application/json' }
      }).then((response) => {
         console.log(response.data + 'Aqui');
      }).catch((e: any) => {
         console.log(e.message);
      });
   }

   const validateForm = (e: any) => {
      e.preventDefault();

      if (String(firstName.current?.value).length < 3) {
         
      }

      if (String(lastName.current?.value).length < 3) {

      }

      if (String(country.current?.value).length < 3) {

      }

      if (String(email.current?.value).length < 3) {

      }

      if (String(password.current?.value).length <= 6) {

      }


      if (String(confirmPassword.current?.value) !== String(password.current?.value)) {

      }

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
                  error={true}
               />
               <InputItem
                  type="text"
                  reference={lastName}
                  title="Last name"
                  placeholder="Your last name"
                  id="yourlastName"
                  error={true}
               />
               <InputItem
                  type={'date'}
                  reference={birthDate}
                  title="Birth date"
                  placeholder="MM/DD/YYYY"
                  id="birthDate"
                  style={{ appearance: 'none' }}
                  error={true}
               />
               <InputItem
                  type="text"
                  reference={country}
                  title="Country"
                  placeholder="Your Country"
                  id="yourcountry"
                  error={true}
               />
               <InputItem
                  type="text"
                  reference={city}
                  title="City"
                  placeholder="Your City"
                  id="yourcity"
                  error={true}
               />
               <InputItem
                  type="email"
                  reference={email}
                  title="e-mail"
                  placeholder="A valid e-mail here"
                  id="youremail"
                  error={true}
               />
               <InputItem
                  type="password"
                  reference={password}
                  title="password"
                  placeholder="Your password"
                  id="password"
                  error={true}
               />
               <InputItem
                  type="password"
                  reference={confirmPassword}
                  title="password"
                  placeholder="Confirm your password"
                  id="passwordRep"
                  error={true}
               />
               <Button
                  title={'Register Now'}
                  onPress={validateForm}
               />
               <Link to={'/Login'} style={{ textDecoration: 'none', marginTop: 10 }}><Description>If you already have an account, click here!</Description></Link>
            </Form>
         </Wrapper>
      </Background>
   )
}