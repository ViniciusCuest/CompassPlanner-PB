import { useEffect, useRef, useState } from 'react';
import {
   Header,
   Inputs,
   Button,
   Background,
   DashboardTable
} from '../../components';

import { ActionArea, Icon, WrapperItem } from "./styled";

import logoBlack from '../../assets/compass-logo-black.png';
import mainImage from '../../assets/uol-logo.png';
import add from '../../assets/plus.svg';
import remove from '../../assets/dash.svg';
import { colors } from '../../global/theme';
import { API } from '../../utils/api';
import { AxiosResponse } from 'axios';

export type ObjDays = Array<{
   day: string;
   color: string;
}>

export type DataDashboard = Array<{
   id: number;
   hour: string;
   day: string;
   items: Array<{
      key: number
      description: string;
   }>
}>

export default function Dashboard() {

   const _DATA: DataDashboard = [
      {
         id: 1,
         day: 'monday',
         hour: '10h30',
         items: [{
            key: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit',
         }]
      },
      {
         id: 2,
         day: 'monday',
         hour: '11h30',
         items: [{
            key: 1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'
         },
         {
            key: 2,
            description: 'Apagar teste'
         },
         {
            key: 3,
            description: '1...2...3...testando...1...2...3...'
         },
         {
            key: 4,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'
         }]
      },
      {
         id: 4,
         day: 'tuesday',
         hour: '15:30',
         items: [{
            key: 1,
            description: 'New Task'
         }]
      },
      {
         id: 3,
         day: 'wednesday',
         hour: '14:30',
         items: [{
            key: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
         }]
      }
   ];

   const [currentDay, setCurrentDay] = useState<string>('monday');
   const [wetherData, setWeatherData] = useState<unknown>({});
   const [data, setData] = useState<DataDashboard | []>(_DATA);

   const [hour, setHour] = useState<string>('');
   const taskRef = useRef<HTMLInputElement>(null);
   const SelectRef = useRef<HTMLSelectElement>(null);

   const DAYS: ObjDays = [
      { day: 'Monday', color: `${colors.red}` },
      { day: 'Tuesday', color: `${colors.orange100}` },
      { day: 'Wednesday', color: `${colors.yellow}` },
      { day: 'Thrusday', color: `${colors.pink_400}` },
      { day: 'Friday', color: `${colors.orange50}` },
      { day: 'Saturday', color: `${colors.yellow100}` },
      { day: 'Sunday', color: `${colors.pink_300}` },
   ];

   async function handleGetData(): Promise<void> {
      await API.get(`/weather?lat=44.34&lon=10.99&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
         {
            headers:
               { "Content-Type": "application/json;charset=utf-8" }
         })
         .then((res: AxiosResponse) => {
            setWeatherData(res.data);
         }).catch((e) => {

         }).finally(() => {

         })
   }

   const handleDeleteAllTasks = (e: UIEvent) => {
      e.preventDefault();
      setData(prev => prev.filter(item => item.day.toLowerCase() !== currentDay.toLowerCase()));
   }

   const handleAddNewTask = (e: UIEvent) => {
      e.preventDefault();

      const maskedHour = hour.replace(':', 'h');
      const checkValues = data.find((i) => i.hour === maskedHour)?.day === SelectRef.current?.value;

      console.log('aqui');

      let randomID: number;

      if (!checkValues) {
         randomID = Math.floor(Math.random() * 100);

         console.log(randomID);

         !!data.findIndex(item => item.id === randomID) ?
            setData((prev: any | DataDashboard) => [...prev,
            {
               id: Math.floor(Math.random() * 100),
               hour: maskedHour,
               day: SelectRef.current?.value.toLowerCase(),
               items: [
                  {
                     key: randomID,
                     description: taskRef.current?.value
                  }]
            }])
            :
            setData((prev: any) => [...prev,
            {
               id: randomID,
               hour: maskedHour,
               day: SelectRef.current?.value.toLowerCase(),
               items: [{
                  key: randomID,
                  description: taskRef.current?.value
               }]
            }])
         return;
      }
   }

   useEffect(() => {
      handleGetData();
   }, []);

   return (
      <Background
         currentPage="Dashboard"
         background={mainImage}
      >
         <Header data={wetherData} logo={logoBlack} />
         <ActionArea>
            <WrapperItem>
               <Inputs
                  reference={taskRef}
                  type={'text'}
                  placeholder={'Task or Issue'}
               />
               <Inputs
                  reference={SelectRef}
                  type={'select'}
                  options={DAYS}
               />
               <Inputs
                  value={hour}
                  type={'time'}
                  onChange={setHour}
                  style={{ width: 120 }}
               />
            </WrapperItem>
            <WrapperItem style={{ marginTop: 3 }}>
               <Button
                  type="action"
                  onPress={handleAddNewTask}
                  add={true}
               >
                  <Icon src={add} />
                  Add to calendar
               </Button>
               <Button
                  type="action"
                  onPress={handleDeleteAllTasks}
                  add={false}
               >
                  <Icon src={remove} />
                  Delete All
               </Button>
            </WrapperItem>
         </ActionArea>
         <DashboardTable
            data={data}
            action={setData}
            days={DAYS}
            currentActive={currentDay}
            setCurrent={setCurrentDay} />
      </Background>
   )
}