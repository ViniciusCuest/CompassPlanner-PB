import {
   Body,
   ButtonHeader,
   CardContainer,
   CardContainerHeader,
   CardRow,
   CardRowHeader,
   Content,
   Header,
   HeaderContent,
   HeaderContentItem,
   HeaderItem,
   ScheduleConflit,
   Table
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
         <Content>
            <CardContainer>
               <CardContainerHeader>
                  <HeaderContent>
                     <HeaderContentItem>Time</HeaderContentItem>
                  </HeaderContent>
               </CardContainerHeader>
               <Body>
                  {
                     data.map((item, id) => {
                        return (
                           <CardRow key={item.id}>
                              <CardRowHeader style={item.items.length > 1 ? { backgroundColor: colors.gray } : {}}>
                                 {
                                    item.hour
                                 }
                              </CardRowHeader>
                              <ScheduleConflit active={!!(item.items.length > 1)}>
                                 {
                                    item.items.map((val, key) => {
                                       return item.items.length > 1 ? (
                                          <TaskItem
                                             key={val.key}
                                             deleteItem={() => handleDeleteItem(item.id, val.key)}
                                             description={val.description}
                                             borderStyle={{ backgroundColor: colors.gray }}
                                          />

                                       ) : (
                                          <TaskItem
                                             key={val.key}
                                             deleteItem={() => { handleDeleteItem(item.id, val.key) }}
                                             description={val.description}
                                             borderStyle={{ backgroundColor: days.find(item => item.day.toLowerCase() === currentActive.toLowerCase())?.color }}
                                          />
                                       );
                                    })
                                 }
                              </ScheduleConflit>
                           </CardRow>
                        );
                     })
                  }
               </Body>
            </CardContainer>
         </Content>
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