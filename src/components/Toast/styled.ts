import styled from "styled-components";
import { colors } from "../../global/theme";

export const Container = styled.section<{ active: boolean }>`
   position: absolute;
   margin-top: 50px;
   top: 0;
   right: 0;
   display: flex;
   flex-direction: row;
   align-items: center;
   width: 320px;
   height: 75px;
   background-color: rgba(0,0,0,.95);
   padding: 0 10px 0 30px;
   border-radius: 12px;
   z-index: 5000;
   border-bottom: 6px solid ${colors.yellow_border};
   transform: ${({ active }) => active ? 'translateX(-50px)' : 'translateX(350px)'};
   opacity: ${({ active }) => active ? 1 : .2};
   transition: all 300ms ease-in;
   overflow: hidden;
`;

export const IconCircle = styled.span`
   display: flex; 
   align-items: center; 
   justify-content: center; 
   width: 35; 
   height: 35;
   border-radius: 50%;
   opacity: 0;
`;

export const Description = styled.p`
   display: flex;
   flex-wrap: wrap;
   width: 80%;
   height: 100%;
   align-items: center;
   text-align: center;
   font-size: 18px;
   color: ${colors.white};
   margin-left: 10px;
`;