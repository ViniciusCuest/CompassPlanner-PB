import { useEffect, useState } from 'react';
import {
   ButtonHeader,
   Header,
   HeaderItem,
   Row,
   Table,
   TableBody,
   TableData,
   TableDataRow,
   VerticalHeader,
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
            <VerticalHeader>
               <VerticalHeaderIndicator style={{ position: 'fixed', zIndex: 1000 }}>
                  Time
               </VerticalHeaderIndicator>
               { /*
                  data.filter(item => item.day === currentDay).map((values) => {
                     return (
                        <TableDataRow
                           key={values.id}
                        >
                           <TableData style={{ backgroundColor: days.find(item => item.day.toLowerCase() === currentDay.toLowerCase())?.color }}>
                              {
                                 values.hour
                              }
                           </TableData>
                        </TableDataRow>
                     )
                  })
               */ }
            </VerticalHeader>
            <Row>
            {
               data.filter(item => item.day === currentDay).map((values) => {
                  return (
                     <TableDataRow
                        key={values.id}
                     >
                        <TableData style={{ backgroundColor: days.find(item => item.day.toLowerCase() === currentDay.toLowerCase())?.color }}>
                           {
                              values.hour
                           }
                        </TableData>
                        <div style={{display: "flex", flexDirection: "row"}}>
                        {
                           values.items.map((item) => {
                              return (
                                 <TaskItem
                                    key={item.key}
                                    description={item.description}
                                    borderStyle={{ backgroundColor: days.find(item => item.day.toLowerCase() === currentDay.toLowerCase())?.color }}
                                 />
                              );
                           })
                        }
                        </div>
                     </TableDataRow>
                  );
               })
            }
            </Row>
         </TableBody>
      </Table>
   );
}