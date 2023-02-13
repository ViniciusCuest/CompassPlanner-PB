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
   VerticalHeaderIndicator,
   VerticalScroll
} from "./styled";
import { ObjDays, DataDashboard } from "../../pages/Dashboard";
import { TaskItem } from "../";
import { colors } from '../../global/theme';

import './style.css';
import { BadgeButton } from '../TaskItem/styled';

type Props = {
   data: DataDashboard
   days: ObjDays;
   currentActive: any;
   setCurrent: any;
   action: React.Dispatch<React.SetStateAction<DataDashboard | []>>;
}

export function DashboardTable({ data, days, setCurrent, currentActive, action }: Props) {

   const handleDeleteItem = (id: number, keyItem: number) => {

      const updatedValues = data.find((item) => item.id === id)?.items.filter((item) => item.key !== keyItem);

      if (!updatedValues?.length) {
         action(prev => prev.filter((item) => item.id !== id));
         return;
      }

      const elementsId = data.findIndex(item => item.id === id);
      const newArrayCopy = [...data];
      const newValueItems: any = newArrayCopy[elementsId].items = [...newArrayCopy[elementsId].items.filter((i) => i.key !== keyItem)];
      const newFullData = data.filter((item) => item.id !== id);

      action([...newFullData, {
         id: id,
         day: newArrayCopy[elementsId].day,
         hour: newArrayCopy[elementsId].hour,
         items: newValueItems
      }]);
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
         <div id="table">
            <div className='container'>
               <div className='table-header'>
                  <div className='table-header-content'>
                     <div className='table-header-item'>Time</div>
                  </div>
               </div>
               <div className='table-body'>
                  {
                     data.map((item, id) => {
                        return (
                           <div className='table-row' key={id}>
                              <div className='table-row-header'>
                                 {
                                    item.hour
                                 }
                              </div>
                              {
                                 item.items.map((val, key) => {
                                    return item.items.length > 1 ? (
                                       <div className='table-row-data' key={key} style={{ background: "gray" }}>
                                          {
                                             val.description
                                          }
                                          <BadgeButton />
                                       </div>
                                    ) : (
                                       <div className='table-row-data' key={key}>
                                          <BadgeButton />
                                       </div>
                                    )
                                 })
                              }
                           </div>
                        )
                     })
                  }
               </div>
            </div>
         </div>
      </Table>
   );
}


{/* 
         <TableBody>
            <VerticalHeader>
               <VerticalHeaderIndicator style={{ position: 'fixed', zIndex: 1000 }}>
                  Time
               </VerticalHeaderIndicator>
            </VerticalHeader>
<Row>
               <VerticalScroll>
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
                              <RowData active={values.items.length > 1}>
                                 {
                                    values.items.map((item, _id) => {
                                       return values.items.length > 1 ?
                                          (
                                             <TaskItem
                                                key={item.key}
                                                deleteItem={() => handleDeleteItem(values.id, item.key)}
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
               </VerticalScroll>
            </Row> 
                  <TableBody>*/

}