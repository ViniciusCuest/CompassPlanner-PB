import { useRef, useState } from 'react';

import { Background } from "../../components/Background";
import { InputItem } from "../../components/InputItem";
import { Description, ErrorText, FormLabel, Title } from "../../components/Texts";

import userIcon from '../../assets/icon-user.svg';
import passwordIcon from '../../assets/icon-password.svg';
import mainImage from '../../assets/image-2.jpg';
import logo from '../../assets/compass-logo.png';

import { ErrorContainer, Wrapper } from './styled';
import { Button } from '../../components/Button';
import { Form } from '../../components/Form';
import { colors } from '../../global/theme';
import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthConext';
import axios, { AxiosResponse } from 'axios';

export default function Login() {

   const { handleLogIn } = useAuth();

   const [error, setError] = useState<string>('');

   const userName = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);

   const handleSubmitForm = async (event: UIEvent) => {
      event.preventDefault();
      try {
         handleLogIn(String(userName.current?.value), String(password.current?.value));
      }
      catch (e: any) {
         setError(e?.message + 'aqui');;
      }
   }

   return (
      <Background
         currentPage='Login'
         background={mainImage}
         logo={logo}
      >
         <Wrapper>
            <Title style={{ marginTop: '45%' }}>Welcome,</Title>
            <Description>To continue browsing safely, log in to the <br />{'\n'} network.</Description>
            <Form style={{ alignItems: "flex-start", justifyContent: 'flex-start', marginTop: 100, marginLeft: -15 }}>
               <FormLabel>Login</FormLabel>
               <InputItem
                  type={'text'}
                  placeholder='user name'
                  reference={userName}
                  id={'your-username'}
                  autoComplete={false}
                  iconSource={userIcon}
                  handleError={setError}
                  error={!!error}
                  style={!!error ? { borderColor: colors.yellow } : {}}
               />
               <InputItem
                  type={'password'}
                  placeholder='password'
                  reference={password}
                  id={'your-password'}
                  autoComplete={false}
                  iconSource={passwordIcon}
                  handleError={setError}
                  error={!!error}
               />
               <ErrorContainer>
                  {
                     !!error &&
                     <ErrorText>{

                        error
                     }</ErrorText>
                  }
               </ErrorContainer>
               <Button
                  title='Log in'
                  style={{ width: 380, marginLeft: 10, marginTop: 40 }}
                  onPress={handleSubmitForm}
               />
               <Link to={'/Register'} style={{ textDecoration: 'none', marginTop: 10, marginLeft: 45, }}><Description>If you don't have an account, click here!</Description></Link>
            </Form>
         </Wrapper>
      </Background>
   )
}