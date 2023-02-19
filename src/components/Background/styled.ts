import styled from "styled-components";
import { colors } from "../../global/theme";

export const Container = styled.main`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   background: ${colors.background_grad};
   width: 100%;
   height: 100vh;
   overflow-y: hidden;
`;

export const DashboardContainer = styled.main<{ img: any }>`
   position: relative;
   display: flex;
   width: 100%;
   height: 100vh;
   flex-direction: column;
   background-color: ${colors.dashboard_background};
   background-image: url(${({ img }) => img});
   background-repeat: no-repeat;
   background-position: 100%;
   background-position-y: 100%;
   box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
`