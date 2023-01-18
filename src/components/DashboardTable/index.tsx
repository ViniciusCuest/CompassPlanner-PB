import { useEffect, useState } from 'react';
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

   useEffect(() => {
      //console.log(days.find(item => item.day === data[0].day.toLowerCase())?.color)
      //backgroundColor: days.find(item => item.day === values.day.toLowerCase())?.colo
   }, []);

   return (
      <Table>
         <Header>
            {
               days.map((item, _id) => {
                  return (
                     <HeaderItem
                        key={_id}
                     >
                        <td>
                           <ButtonHeader
                              active={_id === 0 ? true : false}
                              buttonColor={item.color}
                              onClick={() => setCurrentDay(item.day.toLowerCase())}
                           >
                              {
                                 item.day
                              }
                           </ButtonHeader>
                        </td>
                     </HeaderItem>
                  );
               })
            }
         </Header>
         <TableBody>
            <TableDataRow>
               <VerticalHeaderIndicator>
                  Time
               </VerticalHeaderIndicator>
            </TableDataRow>
            {
               data.filter(item => item.day === currentDay).map((values) => {
                  return (
                     <TableDataRow
                        key={values.id}
                     >
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