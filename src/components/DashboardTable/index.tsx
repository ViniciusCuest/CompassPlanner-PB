import { ObjDays } from "../../pages/Dashboard";
import { ButtonHeader, Header, HeaderItem, Table, TableBody, TableData, TableDataRow, VerticalHeaderIndicator } from "./styled";

type Props = {
   days: ObjDays;
}

export function DashboardTable({ days }: Props) {
   return (
      <Table>
         <Header>
            {
               days.map((item, _id) => {
                  return (
                     <HeaderItem scope='row'>
                        <ButtonHeader active={_id === 0 ? true : false} buttonColor={item.color}>
                           {
                              item.day
                           }
                        </ButtonHeader>
                     </HeaderItem>
                  );
               })
            }
         </Header>
         <TableBody>
            <TableDataRow>
               <VerticalHeaderIndicator scope="col" />
            </TableDataRow>
            <TableDataRow>
               <TableData>
                  10h30m
               </TableData>
            </TableDataRow>
         </TableBody>
      </Table>
   );
}