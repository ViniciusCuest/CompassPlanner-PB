import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Table = styled.section`
   height: 100%;
   margin-top: 20px;
   margin-left: 25px;
`;

export const Header = styled.section`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding-left: 100px;
`;

export const HeaderItem = styled.div`
   & + & {
      margin-left: 3px;
   }
`;

export const ButtonHeader = styled.button<{ buttonColor: string, active: boolean }>`
   width: ${({ active }) => active ? 290 : 240}px;
   height: 33px;
   background-color: ${({ buttonColor }) => buttonColor};
   font-weight: ${fonts.semibold};
   font-size: 20px;
   color: ${colors.black};
   text-align: start;
   border: 0;
   outline: none;
   border-radius: 9px 9px 0px 0px;
   padding-left: 8px;
   transition: width 150ms ease-in;
   cursor: pointer;
`;

export const Content = styled.section`
   height: 70vh;
   width: 98%;
   min-width: 99.5%;
   min-height: calc(92% - 8px);
   overflow: scroll;
   margin-top: 8px;
   padding-right: 20px;
   padding-bottom: 40px;
   cursor: grabbing;

   &::-webkit-scrollbar { 
      padding-left: 50px;
      height: 8px;
      width: 12px; 
   };

   &::-webkit-scrollbar:vertical{
      transform: rotateX(180deg);
   }

   &::-webkit-scrollbar-track {
      border-radius: 24px;
      background-color: ${colors.white};
   }
   &::-webkit-scrollbar-track:horizontal{
      box-shadow: 0px 4px 24px rgba(11, 11, 11, .3);
   }
   &::-webkit-scrollbar-thumb {
      background-color: ${colors.white200};
      border-radius: 20px;
   }

   &::-webkit-scrollbar-corner {
      display: none;
   }

`;

export const CardContainer = styled.div`
   display: table;
   position: relative;
   > * {
      user-select: none;
   }
`;

export const CardContainerHeader = styled.header`
   display: flex;
   flex-direction: row;
   width: 100%;
`
export const HeaderContent = styled.section`
   position: sticky;
   left: 0;
   z-index: 4;
   margin-top: 10px;
   box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.1);
`;

export const HeaderContentItem = styled.span`
   display: flex;
   width: 85px;
   height: 75px;
   border-radius: 10px;
   background-color: ${colors.white};
   text-align: center;
   justify-content: center;
   align-items: center;
   color: ${colors.gray800};
   font-weight: ${fonts.extra};
`

export const Body = styled.section`
   width: 100%;
`
export const CardRow = styled.section`
   position: sticky;
   left: 0;
   background: transparent;
   z-index: 1; 
   display: flex;
   flex-direction: row;
   align-items: center;
   margin-top: 15px;

   > span > div + div {
      margin-left: 17px;
   }

`

export const CardRowHeader = styled.span`
   position: sticky;
   left: 0;
   font-weight: ${fonts.bold};
   z-index: 10;
   display: flex;
   align-items: center;
   justify-content: center;
   height: 85px;
   width: 85px;
   margin-right: 15px;
   background-color: red;
   border-radius: 10px;
`;

export const ScheduleConflit = styled.span<{active: boolean}>`
   position: relative;
   display: flex;
   flex-direction: row;
   align-items: center;
   ${({ active }) => active &&
      `&::after {
      position: absolute;
      content: '';
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background-color: #000000B2;
      margin-left: -10px;
      }
      &::before{
         position: absolute;
         z-index: 1;
         content: '';
         width: 100%;
         height: 4px;
         background-color:#000000B2;
         border-radius: 12px;
      }`
   };
`