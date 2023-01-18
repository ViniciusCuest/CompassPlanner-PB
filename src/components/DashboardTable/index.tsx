import { useState } from 'react';
import {
   ButtonHeader,
   Header,
   HeaderItem,
   Table,
   TableBody,
   TableData,
   TableDataRow,
   VerticalHeaderIndicator
} from "./styled";
import { ObjDays, DataDashboard } from "../../pages/Dashboard";
import { TaskItem } from "../";

type Props = {
   data: DataDashboard
   days: ObjDays;
}

export function DashboardTable({ data, days }: Props) {

   const [currentDay, setCurrentDay] = useState<string>('monday');

   return (
      <Table>
         <Header>
            {
               days.map((item, _id) => {
                  return (
                     <HeaderItem scope='row'>
                        <ButtonHeader
                           active={_id === 0 ? true : false}
                           buttonColor={item.color}
                           onClick={() => setCurrentDay(item.day.toLowerCase())}
                        >
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
               <VerticalHeaderIndicator scope="col">
                  Time
               </VerticalHeaderIndicator>
            </TableDataRow>
            {
               data.filter(item => item.day === currentDay).map((values) => {
                  return (
                     <TableDataRow key={values.id}>
                        <TableData>
                           {
                              values.hour
                           }
                        </TableData>
                        {
                           values.items.map((item) => {
                              return (
                                 <TaskItem
                                    key={item.key}
                                    description={item.description}
                                 />
                              );
                           })
                        }
                     </TableDataRow>
                  );
               })
            }
         </TableBody>
      </Table>
   );
}