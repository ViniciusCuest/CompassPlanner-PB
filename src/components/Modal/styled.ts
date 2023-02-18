import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const FadeBackground = styled.main<{ active: boolean }>`
   width: 100%;
   height: 100vh;
   position: absolute;
   top: 0;
   background-color: rgba(0,0,0,.4);
   z-index: 1000;
   transition: all 100ms ease-in;
   visibility: ${({ active }) => active ? 'visible' : 'hidden'};
   > * {user-select: none;}
`;

export const Container = styled.section<{ active: boolean }>`
   position: fixed;
   display: flex;
   justify-content: center;
   align-items: center;
   top: 50%;
   left: 50%;
   z-index: 2000;
   width: 350px;
   height: 240px;
   background-color: ${colors.white};
   border: 2px solid ${colors.white200};
   border-radius: 20px;
   font-weight: ${fonts.semibold};
   font-size: 19px;
   text-align: center;
   opacity: ${({ active }) => active ? '1' : '0'};
   box-shadow: 0 5px 24px 0 rgba(0, 0, 0, .4);
   visibility: ${({ active }) => active ? 'visible' : 'hidden'};
   transform: translate(-50%,-50%) ${({ active }) => active ? 'scale(1)' : 'scale(.7)'};
   transition: transform 150ms ease-in;
`;

export const IconButton = styled.button`
   outline: none;
   border: 0;
   background-color: transparent;
   cursor: pointer;
   transition: all 100ms ease-in;
   &:hover{
      transform: scale(.92);
   }
`

export const Title = styled.h1`
   font-size: 30px;
   color: ${colors.black};
   font-weight: ${fonts.bold};
   line-break: 0;
`;

export const Header = styled.header`
   position: absolute;
   height: 60px;
   top: 0;
   display: flex;
   flex-direction: row;
   align-items: center;
   border-top-right-radius: 18px;
   border-top-left-radius: 18px;
   justify-content: space-between;
   border-bottom: 2px solid #ebebeb;
   background: ${colors.white};
   padding: 0 5px 0 15px;
   box-shadow: 0 5px 18px 0 rgba(0, 0, 0, 0.04);
   z-index: -500;
   width: 100%;
`

export const ButtonsArea = styled.footer`
   position: absolute;
   bottom: 0;
   margin-bottom: 20px;
   display: flex;
   flex-direction: row;
   justify-content: space-around;
   width: 100%;
`;

export const Button = styled.button`
   min-width: 25%;
   height: 50px;
   border-radius: 12px;
   font-size: 16px;
   outline: none;
   border: 0;
   font-weight: ${fonts.bold};
   transition: transform 100ms ease-in; 
   box-shadow: 0 5px 24px 0 rgba(0, 0, 0, .15);
   cursor: pointer;
   &:hover{
      transform: scale(.92);
   }
`;