import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Container = styled.section<{ active: boolean }>`
   position: absolute;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%) ${({ active }) => active ? 'scale(1)' : 'scale(.7)'};
   background-color: ${colors.white};
   border: 2px solid ${colors.white200};
   width: 30%;
   height: 350px;
   border-radius: 20px;
   opacity: ${({ active }) => active ? '1' : '0'};
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
   background-color: ${colors.yellow};
   padding: 0 0 0 15px;
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
   min-width: 20%;
   height: 50px;
   border-radius: 12px;
   font-size: 16px;
   outline: none;
   border: 0;
   font-weight: ${fonts.semibold};
   transition: transform 100ms ease-in; 
   cursor: pointer;
   &:hover{
      transform: scale(.92);
   }
`;