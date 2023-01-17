import { useRef, useEffect } from 'react';

import { Background } from "../../components/Background";
import { InputItem } from "../../components/InputItem";
import { Description, Title } from "../../components/Texts";

import userIcon from '../../assets/icon-user.svg';
import passwordIcon from '../../assets/icon-password.svg';
import { Wrapper } from './styled';

export default function Login() {
   const userName = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);
   return (
      <Background>
         <Wrapper>
            <InputItem 
               type={'text'}
               title={''}
               placeholder='user name'
               reference={userName}
               id={'yourusername'}
               iconSource={userIcon}
            />
            <InputItem 
               type={'password'}
               title={''}
               placeholder='password'
               reference={password}
               id={'yourpassword'}
               iconSource={passwordIcon}
            />
         </Wrapper>
      </Background>
   )
}