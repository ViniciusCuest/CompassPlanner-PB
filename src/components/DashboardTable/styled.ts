import styled from "styled-components";
import { colors, fonts } from "../../global/theme";

export const Table = styled.table`
   margin-top: 20px;
   margin-left: 130px;
`;

export const Header = styled.thead`
   display: flex;
   flex-direction: row;
   align-items: center;
`;

export const HeaderItem = styled.th`

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
   & + & {
      margin-left: 3px;
   }
`;

export const TableBody = styled.tbody`
   display: flex;
   flex-direction: column;
`;

export const VerticalHeaderIndicator = styled.th`
   width: 85px;
   height: 75px;
   box-shadow: 0px 4px 24px rgba(168, 168, 168, 0.25);
   border-radius: 10px;
`

export const TableDataRow = styled.tr`

`;

export const TableHeaderData = styled.td`

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
   background: #FF0024;
`;