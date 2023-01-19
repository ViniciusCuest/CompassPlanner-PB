import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Container = styled.div`
   position: relative;
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 512px;
   height: 85px;
   padding: 0 42px 0 28px;
   border-radius: 15px;
   background: linear-gradient(112.83deg, rgba(228, 240, 248, 0.42) 0%, rgba(255, 255, 255, 0.336) 110.84%);
   border: 2px solid #FFFFFF;
   box-shadow: 0px 2px 5.5px rgba(0, 0, 0, .15);
   backdrop-filter: blur(10.5px);
`;

export const Border = styled.span`
   position: absolute;
   left: 0;
   z-index: -1;
   width: 14px;
   height: 100%;
   border-radius: 15px 0 0 15px;

`;

export const Description = styled.p`
   display: flex;
   flex-wrap: wrap;
   font-weight: 400;
   line-height: 20px;
   font-size: 20px;
   color: ${colors.gray900};
`;

export const BadgeButton = styled.button`
   position: absolute;
   top: 0;
   right: 0;
   margin-top: 8px;
   margin-right: 14px;
   width: 58px;
   height: 25px;
   border-radius: 4px;
   background-color: ${colors.orange800};
   color: ${colors.white};
   font-size: 14px;
   font-weight: ${fonts.extra};
   transition: transform 120ms ease-in;
   outline: none;
   border: 0;
   cursor: pointer;
   &:hover {
      transform: scale(.95);
   }
`;