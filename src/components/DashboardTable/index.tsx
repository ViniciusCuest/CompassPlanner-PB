import {
   Body,
   ButtonHeader,
   CardContainer,
   CardContainerHeader,
   CardRow,
   CardRowHeader,
   Centered,
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
import { useEffect, useState } from "react";
import { format } from "date-fns";
import { SkeletonLoading } from "../SkeletonLoading";

type Props = {
   data: DataDashboard | any;
   loading: boolean;
   days: ObjDays;
   currentActive: any;
   setCurrent: any;
   action: React.Dispatch<React.SetStateAction<DataDashboard | []>>;
}

export function DashboardTable({ data, days, setCurrent, currentActive, action, loading }: Props) {

   const [scrollHandler, setScrollHandler] = useState<{ pageX: number, scrollX: number, isScrolling: boolean }>({
      pageX: 0,
      scrollX: 0,
      isScrolling: false
   });

   const handleDeleteItem = (id: number, keyItem: number) => {

      const updatedValues = data.find((item: any) => item._id === id)?.items.filter((item: any) => item.key !== keyItem);

      if (!updatedValues?.length) {
         action(prev => prev.filter((item) => item._id !== id));
         return;
      }

      const newArrayCopy = [...data];
      const elementsId = newArrayCopy.findIndex(item => item.id === id);
      const newValueItems: any = newArrayCopy[elementsId].items = [...newArrayCopy[elementsId].items.filter((i: any) => i.key !== keyItem)];
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
                              if (currentActive === item.day.toLowerCase())
                                 return;

                              setCurrent(item.day.toLowerCase());
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
               {
                  loading ?
                     <SkeletonLoading />
                     :
                     <Body>
                        {
                           // ?.sort((a: any, b: any) => {
                           // return format(new Date(a?.createdAt), 'HH:mm').localeCompare(format(new Date(b?.createdAt), 'HH:mm'));
                           //})
                           data?.events
                              ?.map((item: any) => {
                                 return (
                                    <CardRow key={item._id}>
                                       <CardRowHeader
                                          load={false}
                                          style={item?.items ?
                                             {
                                                backgroundColor: colors.gray200,
                                                color: colors.white,
                                                fontWeight: fonts.regular
                                             } :
                                             {
                                                backgroundColor: days.find(item => item.day.toLowerCase() === currentActive.toLowerCase())?.color,
                                             }}>
                                          {
                                             `${format(new Date(item.createdAt), 'HH:mm').replace(':', 'h')}m`
                                          }
                                       </CardRowHeader>
                                       <ScheduleConflit active={!!(item?.items)}>
                                          {
                                             item?.items ?
                                                (item.items.map((value: any) => (
                                                   <TaskItem
                                                      key={value.key}
                                                      loading={false}
                                                      deleteItem={() => handleDeleteItem(item?.id, 1)}
                                                      description={value?.description}
                                                      borderStyle={{ backgroundColor: colors.gray }}
                                                   />
                                                )))
                                                :
                                                <TaskItem
                                                   loading={false}
                                                   deleteItem={() => handleDeleteItem(item?.id, 1)}
                                                   description={item.description}
                                                   borderStyle={{
                                                      backgroundColor:
                                                         `${days.find((item: any) => item.day.toLowerCase() === currentActive.toLowerCase())?.color}`
                                                   }}
                                                />
                                          }
                                       </ScheduleConflit>
                                    </CardRow>
                                 );
                              })
                        }
                        {
                           !(data?.events?.length) && !loading &&
                           <Centered style={{ color: `${days.find((item: any) => item.day.toLowerCase() === currentActive.toLowerCase())?.color}` }}>
                              {
                                 `There's no appointment on ${currentActive[0].toUpperCase() + currentActive.substring(1)}`
                              }
                           </Centered>
                                             //.filter((active: any) => active?.day === currentActive)
                        //.sort((a:any, b:any) => {
                         //  return a.hour.localeCompare(b?.hour);
                        //})
                /*     data?.events.map((item: any) => {
                           console.log(item);
                           return (
                              <CardRow key={item._id}>
                                 <CardRowHeader
                                    style={item.items.length > 1 ?
                                       {
                                          backgroundColor: colors.gray200,
                                          color: colors.white,
                                          fontWeight: fonts.regular
                                       } :
                                       {
                                          //backgroundColor: days.find(item => item.day.toLowerCase() === currentActive.toLowerCase())?.color,
                                       }}>
                                    {
                                       //`${item.hour.replace(':', 'h')}m`
                                    }
                                 </CardRowHeader>
                                 <ScheduleConflit active={!!(item?.items.length > 1)}>
                                    {
                                       item?.items ?
                                       item?.items?.map((val:any) => {
                                          return item?.items?.length > 1 ? (
                                             <TaskItem
                                                key={val.key}
                                                deleteItem={() => handleDeleteItem(item?.id, val?.key)}
                                                description={val?.description}
                                                borderStyle={{ backgroundColor: colors.gray }}
                                             />

                                          ) : (
                                             <TaskItem
                                                key={val.key}
                                                deleteItem={() => { handleDeleteItem(item?.id, val?.key) }}
                                                description={val.description}
                                                borderStyle={{ backgroundColor: `${days.find((item:any) => item.day.toLowerCase() === currentActive.toLowerCase())?.color}` }}
                                             />
                                          );
                                       }) :
                                       <></>
                                    }
                                 </ScheduleConflit>
                              </CardRow>
                           );
                        })
                     */}
                     </Body>
               }
            </CardContainer>
         </Content>
      </Table>
   );
}