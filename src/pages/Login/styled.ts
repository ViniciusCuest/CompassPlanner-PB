import styled from "styled-components";
import { colors } from "../../global/theme";

export const Wrapper = styled.section`
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   height: 100%;
   padding: 0 3vw 0 12vw;

   > h1::selection,label::selection,p::selection,input::selection,button::selection, br::selection, img::selection {
      background-color: ${colors.yellow};
      color: ${colors.black};
   }
   > h1::-moz-selection,label::-moz-selection,p::-moz-selection,input::-moz-selection,button::-moz-selection {
      background-color: ${colors.yellow};
      color: ${colors.black};
   }
`;

export const ErrorContainer = styled.div`
   margin-left: 13%;
   width: 300px;
   height: 100px
`;