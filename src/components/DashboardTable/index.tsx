import { useEffect, useState } from 'react';
import {
   ButtonHeader,
   Header,
   HeaderItem,
   Row,
   RowData,
   Table,
   TableBody,
   TableData,
   TableDataRow,
   VerticalHeader,
   VerticalHeaderIndicator
} from "./styled";
import { ObjDays, DataDashboard } from "../../pages/Dashboard";
import { TaskItem } from "../";
import { colors } from '../../global/theme';

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
                           active={item.day.toLowerCase() === currentDay ? true : false}
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
                           <TableData
                              style={{
                                 backgroundColor:
                                    values.items.length > 1 ?
                                       colors.gray200
                                       : days.find(item => item.day.toLowerCase() === currentDay.toLowerCase())?.color,
                                 color: values.items.length > 1 ?
                                       colors.white
                                       : colors.black
                              }}>
                              {
                                 values.hour
                              }
                           </TableData>
                           <RowData active={values.items.length > 1 ? true : false}>
                              {
                                 values.items.map((item, _id) => {
                                    return values.items.length > 1 ?
                                       (
                                          <TaskItem
                                             key={item.key}
                                             description={item.description}
                                             borderStyle={{ backgroundColor: colors.gray }}
                                          />
                                       ) :
                                       (
                                          <TaskItem
                                             key={item.key}
                                             description={item.description}
                                             borderStyle={{ backgroundColor: days.find(item => item.day.toLowerCase() === currentDay.toLowerCase())?.color }}
                                          />
                                       )
                                 })
                              }
                           </RowData>
                        </TableDataRow>
                     );
                  })
               }
            </Row>
         </TableBody>
      </Table>
   );
}