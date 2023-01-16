import styled from "styled-components";
import { colors } from "../../global/theme";

export const Container = styled.main`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   background: ${ colors.background_grad };
   width: 100%;
   height: 100vh;
   overflow-y: hidden;
`;