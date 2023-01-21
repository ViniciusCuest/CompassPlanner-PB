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
   currentActive: any;
   setCurrent: any;
   action: React.Dispatch<React.SetStateAction<DataDashboard | []>>;
}

export function DashboardTable({ data, days, setCurrent, currentActive, action }: Props) {

   useEffect(() => {
      //backgroundColor: days.find(item => item.day === values.day.toLowerCase())?.colo
   }, []);

   const handleDeleteItem = (id: number, keyItem: number) => {

      const updatedValues = data.find((item) => item.id === id)?.items.filter((item) => item.key !== keyItem);

      console.log(updatedValues)

      if(!updatedValues?.length) {
         action(data.filter((item) => item.id !== id));
         return;
      }

      //action((prev: any) => [...prev, ]);
      //action((prev: any) => {
         //console.log(prev);
         //console.log([prev.find((item: any) => item.id === id)?.items.filter(((item: any) => item.key !== keyItem)), ...prev]);
         //return [...prev, prev.find((item: any) => Number(item.id) === Number(id))?.items.filter(((item: any) => Number(item.key) !== Number(keyItem)))]
      //});
      //console.log(data.find((item: any) => item.id === id)?.items.filter(((item: any) => item.key !== keyItem)));
      //console.log(id, keyItem);
   }

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
                           active={item.day.toLowerCase() === currentActive ? true : false}
                           buttonColor={item.color}
                           onClick={() => setCurrent(item.day.toLowerCase())}
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
                  data.filter(item => item.day === currentActive).map((values) => {
                     return (
                        <TableDataRow
                           key={values.id}
                        >
                           <TableData
                              style={{
                                 backgroundColor:
                                    values.items.length > 1 ?
                                       colors.gray200
                                       : days.find(item => item.day.toLowerCase() === currentActive.toLowerCase())?.color,
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
                                             deleteItem={() => { handleDeleteItem(values.id, item.key) }}
                                             description={item.description}
                                             borderStyle={{ backgroundColor: colors.gray }}
                                          />
                                       ) :
                                       (
                                          <TaskItem
                                             key={item.key}
                                             deleteItem={() => { handleDeleteItem(values.id, item.key) }}
                                             description={item.description}
                                             borderStyle={{ backgroundColor: days.find(item => item.day.toLowerCase() === currentActive.toLowerCase())?.color }}
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