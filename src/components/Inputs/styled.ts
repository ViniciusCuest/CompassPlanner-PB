import styled from "styled-components";
import { colors } from "../../global/theme";

export const Input = styled.input<{ type: string }>`
   width: 391px;
   height: 45px;
   background-color: ${colors.white};
   border: 2px solid ${colors.yellow};
   border-radius: 10px;
   font-size: 14px;
   padding-left: 15px;
   outline: none;
   &::placeholder{
      color: ${colors.gray};
   }
`;

export const Select = styled.select`
   width: 240px;
   height: 45px;
   background-color: ${colors.white};
   border: 2px solid ${colors.yellow};
   border-radius: 10px;
   margin: 0 5px;
   padding-left: 10px;
   outline: none;
   cursor: pointer;
`;

export const Option = styled.option`
   cursor: pointer;
`;