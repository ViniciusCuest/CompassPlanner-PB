import styled from "styled-components";
import { colors } from "../../global/theme";

export const Wrapper = styled.section`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   padding: 0 10vw;

   > h1::selection,label::selection,p::selection,input::selection {
      background-color: ${colors.yellow};
      color: ${colors.black};
   }
   > h1::-moz-selection,label::-moz-selection,p::-moz-selection,input::-moz-selection {
      background-color: ${colors.yellow};
      color: ${colors.black};
   }
`;