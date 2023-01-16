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
   color: ${colors.secondary_text};
   font-weight: ${fonts.regular};
   font-size: 1em;
   background-color: ${colors.text_input};
   border: 1px solid ${colors.border_color};
   border-radius: 50px;
   margin-left: 15px;
   padding: 0 10px 0 25px;
   outline: none;
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