import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Table = styled.table`
   height: 100%;
   margin-top: 20px;
   margin-left: 25px;
   overflow-x: hidden;
`;

export const Header = styled.thead`
   display: flex;
   flex-direction: row;
   align-items: center;
   padding-left: 100px;
`;

export const HeaderItem = styled.tr`

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
   cursor: pointer;
   & + & {
      margin-left: 3px;
   }
`;

export const TableBody = styled.tbody`
   display: flex;
   min-width: 100%;
   min-height: 100%;
   flex-direction: column;
   overflow-x: scroll;
   cursor: grab;
`;

export const VerticalHeaderIndicator = styled.th`
   display: flex;
   align-items: center;
   justify-content: center;
   width: 85px;
   height: 75px;
   font-size: 17px;
   font-weight: ${fonts.extra};
   box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
   border-radius: 10px;
`

export const TableDataRow = styled.tr`
   display: flex;
   width: auto;
   flex-direction: row;
   align-items: center;
   margin-top: 14px;
   > td + td {
      margin-left: 15px;
   }
`;

export const TableData = styled.td`
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 17px;
   font-weight: ${fonts.semibold};
   width: 85px;
   height: 85px;
   border-radius: 10px;
   background-color: ${colors.red};
   border-bottom: 2px solid ${colors.white200};
`;