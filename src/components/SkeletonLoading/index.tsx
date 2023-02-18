import { useEffect } from "react";
import { Body, CardRow, CardRowHeader, ScheduleConflit } from "../DashboardTable/styled";
import { TaskItem } from "../TaskItem";

export function SkeletonLoading() {

   const qtd = [
      { array: [{}, {}, {}] },
      { array: [{}, {}] },
      { array: [{}, {},] },
      { array: [{}] },
   ]

   useEffect(() => {
      //console.log(Math.ceil(window.innerHeight / (300 - 85)))
      //console.log(Math.ceil(window.innerWidth / (512 + 85)));
   }, []);

   return (
      <Body>
         {
            qtd.map((item, key) => {
               return (
                  <CardRow key={String(key)}>
                     <CardRowHeader
                        load={true}
                     >
                     </CardRowHeader>
                     {
                        item.array.map((horizontal, id) => {
                           return (
                              <ScheduleConflit
                                 key={String(id)}
                                 active={false}
                              >
                                 <TaskItem
                                    loading={true}
                                    description=""
                                    borderStyle={{}}
                                    deleteItem={() => { }}
                                 />
                              </ScheduleConflit>
                           )
                        })
                     }
                  </CardRow>
               );
            })
         }
      </Body>
   )
}