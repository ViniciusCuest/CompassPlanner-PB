import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Container = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   & + & {
      margin-top: 18px;
   }
`;
export const Input = styled.input`
   width: 380px;
   height: 60px;
   font-weight: ${fonts.regular};
   font-size: 1em;
   color: ${colors.secondary_text} !important;
   background-color: ${colors.text_input} !important;
   border: 1px solid ${colors.border_color};
   border-radius: 50px;
   margin-left: 15px;
   padding: 0 50px 0 25px;
   outline: none;

   &&&{
      color: ${colors.secondary_text} !important;
      background-color: ${colors.text_input} !important;
   }

   &::placeholder {
      font-size: 0.75em;
      background-color: ${colors.text_input};
      color: ${colors.secondary_text};
      font-weight: ${fonts.regular};
   }
`;

export const Label = styled.label`
   font-size: 1em;
   color: ${colors.secondary_text};
   font-weight: ${fonts.regular};
   cursor: pointer;
`;

export const Icon = styled.img<{ active: boolean }>`
   margin-left: 20px;
   transition: transform 150ms ease-out;
   transform: ${({ active }) => active ? `translateX(-65px)` : `translateX(0)`};
`;