import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Shadow = styled.span`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 50px;
   box-shadow: 5px 5px 15px 0px #00000026;
   height: 62px;
   width: 465px;
   margin-top: 20px;
`;

export const Container = styled.button`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 62px;
   width: 465px;
   padding-right: 25px;
   background: ${colors.button_grad};
   color: ${colors.white};
   box-shadow: 5px 5px 15px 0px #00000026;
   font-size: 2em;
   font-weight: ${fonts.bold};
   border: 0;
   border-radius: 50px;
   outline: none;
   cursor: pointer;
   &::after {
      position: absolute;
      content: '';
      z-index: -1;
      border: 0;
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      border-radius: 50px;
      box-shadow: 5px 5px 15px 0px #00000026;
      background: ${colors.button_borderGrad};
   }
`;

export const ActionButton = styled.button`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   font-weight: ${fonts.bold};
   font-size: 20px;
   color: ${colors.white};
   width: 200px;
   padding: 10px 12px;
   height: 45px;
   border-radius: 10px;
   transition: transform 100ms ease-in;
   border: 0;
   outline: none;
   cursor: pointer;
   &:hover{
      transform: scale(.975);
   }
   & + & {
      margin-left: 25px;
   }
`;
