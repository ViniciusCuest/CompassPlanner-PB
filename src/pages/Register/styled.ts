import styled from "styled-components";
import { colors } from "../../global/theme";

export const Wrapper = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   padding: 0 3vw 0 12vw;
   overflow: hidden;

   > h1::selection,label::selection,p::selection,input::selection {
      background-color: ${colors.yellow};
      color: ${colors.black};
   }
   > h1::-moz-selection,label::-moz-selection,p::-moz-selection,input::-moz-selection {
      background-color: ${colors.yellow};
      color: ${colors.black};
   }
`;