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

export const TableBody = styled.section`
   position: relative;
   display: flex;
   flex-direction: column;
   height: 20%;
   min-height: 100%;
   justify-content: flex-start;
   transform: translateX(180deg);
`;

export const VerticalHeader = styled.div`
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
`;

export const VerticalHeaderIndicator = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   margin-top: 90px;
   width: 85px;
   height: 75px;
   font-size: 17px;
   font-weight: ${fonts.extra};
   box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
   border-radius: 10px;
`

export const VerticalScroll = styled.div`
   position: relative;
   overflow-y: scroll;
   height: 82%;
`;

export const Row = styled.section`
   position: sticky;
   margin-top: 85px;
   overflow-x: scroll;
   overflow-y: hidden;
   height: 100%;
   width: 98%;
   &::-webkit-scrollbar {
      height: 8px;
   };
   &::-webkit-scrollbar-track {
      border-radius: 24px;
      background-color: ${colors.white};
   }
   &::-webkit-scrollbar-thumb {
      background-color: ${colors.white200};
      border-radius: 20px;
   }
`;

export const TableDataRow = styled.div`
   display: flex;
   width: auto;
   flex-direction: row;
   align-items: center;
   margin-top: 15px;
   > div{
      margin-left: calc(85px + 15px);
      > div + div {
         margin-left: 15px;
      }
   }
`;

export const TableData = styled.span`
   position: fixed;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   font-size: 17px;
   font-weight: ${fonts.semibold};
   width: 85px;
   height: 85px;
   border-radius: 10px;
   background-color: ${colors.red};
   border-bottom: 2px solid ${colors.white200};
   z-index: 5;
`;

export const RowData = styled.div<{ active?: boolean }>`
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
`;