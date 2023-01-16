import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Container = styled.button`
   position: relative;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 62px;
   width: 465px;
   margin-top: 20px;
   padding-right: 25px;
   background: ${colors.button_grad};
   color: ${colors.white};
   box-shadow: 5px 5px 15px 0px #00000026 inset;
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
      background: ${colors.button_borderGrad};
   }
`;