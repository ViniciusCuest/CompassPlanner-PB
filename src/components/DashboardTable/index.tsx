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
import { colors, fonts } from '../../global/theme';
import { useState } from "react";

type Props = {
   data: DataDashboard
   days: ObjDays;
   currentActive: any;
   setCurrent: any;
   action: React.Dispatch<React.SetStateAction<DataDashboard | []>>;
}

export function DashboardTable({ data, days, setCurrent, currentActive, action }: Props) {

   const [scrollHandler, setScrollHandler] = useState<{ pageX: number, scrollX: number, isScrolling: boolean }>({
      pageX: 0,
      scrollX: 0,
      isScrolling: false
   });

   const handleDeleteItem = (id: number, keyItem: number) => {

      const updatedValues = data.find((item) => item.id === id)?.items.filter((item) => item.key !== keyItem);

      if (!updatedValues?.length) {
         action(prev => prev.filter((item) => item.id !== id));
         return;
      }

      const newArrayCopy = [...data];
      const elementsId = newArrayCopy.findIndex(item => item.id === id);
      const newValueItems: any = newArrayCopy[elementsId].items = [...newArrayCopy[elementsId].items.filter((i) => i.key !== keyItem)];
      const newFullData = newArrayCopy.filter((item) => item.id !== id);

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
                           onClick={() => {
                              setCurrent(item.day.toLowerCase())
                           }}
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
         <Content
            style={scrollHandler.isScrolling ? { cursor: 'grabbing' } : { cursor: 'default' }}
            onMouseDown={(evt) => {
               setScrollHandler({ isScrolling: true, scrollX: evt.currentTarget.scrollLeft, pageX: evt.pageX - evt.currentTarget.offsetLeft });
            }}
            onMouseMove={(evt) => {
               if (scrollHandler.isScrolling) {
                  let runX = (evt.pageX - evt.currentTarget.offsetLeft) - scrollHandler.pageX;
                  evt.currentTarget.scrollLeft = scrollHandler.scrollX - runX;
               }
            }}
            onMouseLeave={() => {
               setScrollHandler(prev => {
                  return { ...prev, isScrolling: false }
               });
            }}
            onMouseUp={() => {
               setScrollHandler(prev => {
                  return { ...prev, isScrolling: false }
               });
            }}
         >
            <CardContainer>
               <CardContainerHeader>
                  <HeaderContent>
                     <HeaderContentItem>Time</HeaderContentItem>
                  </HeaderContent>
               </CardContainerHeader>
               <Body>
                  {
                     data
                        .filter((active) => active.day === currentActive)
                        .sort((a, b) => {
                           return a.hour.localeCompare(b.hour);
                        })
                        .map((item) => {
                           return (
                              <CardRow key={item.id}>
                                 <CardRowHeader
                                    style={item.items.length > 1 ?
                                       {
                                          backgroundColor: colors.gray200,
                                          color: colors.white,
                                          fontWeight: fonts.regular
                                       } :
                                       {
                                          backgroundColor: days.find(item => item.day.toLowerCase() === currentActive.toLowerCase())?.color,
                                       }}>
                                    {
                                       `${item.hour.replace(':', 'h')}m`
                                    }
                                 </CardRowHeader>
                                 <ScheduleConflit active={!!(item.items.length > 1)}>
                                    {
                                       item.items.map((val) => {
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
                                                borderStyle={{ backgroundColor: `${days.find(item => item.day.toLowerCase() === currentActive.toLowerCase())?.color}` }}
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