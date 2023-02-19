import styled from "styled-components";
import { colors } from "../../global/theme";

export const Spinner = styled.div`
   border: 5px solid ${colors.white};
   border-top: 5px solid ${colors.orange100};
   border-radius: 50%;
   width: 35px;
   height: 35px;
   transition: opacity 1s ease-in;
   animation: spin 1s linear infinite;
   opacity: 0;
   @keyframes spin {
      0% {
      transform: rotate(0deg);
      }
      100% {
      transform: rotate(360deg);
      }
   }
`; 