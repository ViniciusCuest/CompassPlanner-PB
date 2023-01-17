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

export default function Login() {
   const [error, setError] = useState<string>('');

   const userName = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);

   const handleSubmitForm = (event: UIEvent) => {
      event.preventDefault();
      return;
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
                  title={''}
                  placeholder='user name'
                  reference={userName}
                  id={'your-username'}
                  autoComplete={false}
                  iconSource={userIcon}
                  style={!!error ? { borderColor: colors.yellow } : {}}
               />
               <InputItem
                  type={'password'}
                  title={''}
                  placeholder='password'
                  reference={password}
                  id={'your-password'}
                  autoComplete={false}
                  iconSource={passwordIcon}
                  style={{ fontSize: 20, borderColor: !!error ? colors.yellow : '' }}
               />
               <ErrorContainer>
                  {
                     !!error &&
                     <ErrorText>Wow, invalid username or password. <br />{'\n'} Please, try again!</ErrorText>
                  }
               </ErrorContainer>
               <Button
                  title='Log in'
                  style={{ width: 380, marginLeft: 10, marginTop: 40 }}
                  onPress={handleSubmitForm}
               />
            </Form>
         </Wrapper>
      </Background>
   )
}