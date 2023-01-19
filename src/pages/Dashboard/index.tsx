import { useEffect, useState } from 'react';
import {
   Header,
   Inputs,
   Button,
   Background,
   DashboardTable
} from '../../components';

import { ActionArea, Icon, TableWrapper, WrapperItem } from "./styled";

import logoBlack from '../../assets/compass-logo-black.png';
import mainImage from '../../assets/uol-logo.png';
import add from '../../assets/plus.svg';
import remove from '../../assets/dash.svg';
import { colors } from '../../global/theme';
import { API } from '../../utils/api';

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

   const [data, setData] = useState<unknown>({});

   async function handleGetData() {
      await API.get(`/weather?lat=44.34&lon=10.99&appid=${process.env.REACT_APP_API_KEY}`,
         { headers: { "Content-Type": "application/json;charset=utf-8" } }).then((res) => {
            setData(res.data);
         }).catch((e) => {

         }).finally(() => {

         })
   }

   useEffect(() => {
      handleGetData();
   }, []);

   const DATA: DataDashboard = [
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
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'
         },
         {
            key: 3,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit'
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

   const DAYS: ObjDays = [
      { day: 'Monday', color: `${colors.red}` },
      { day: 'Tuesday', color: `${colors.orange100}` },
      { day: 'Wednesday', color: `${colors.yellow}` },
      { day: 'Thrusday', color: `${colors.pink_400}` },
      { day: 'Friday', color: `${colors.orange50}` },
      { day: 'Saturday', color: `${colors.yellow100}` },
      { day: 'Sunday', color: `${colors.pink_300}` },
   ];

   return (
      <Background
         currentPage="Dashboard"
         background={mainImage}
      >
         <Header data={data} logo={logoBlack} />
         <ActionArea>
            <WrapperItem>
               <Inputs
                  type={'text'}
                  placeholder={'Task or Issue'}
               />
               <Inputs
                  type={'select'}
                  placeholder={'Task or Issue'}
                  options={DAYS}
               />
               <Inputs
                  type={'time'}
                  placeholder={'Task or Issue'}
                  style={{ width: 120 }}
               />
            </WrapperItem>
            <WrapperItem style={{ marginTop: 3 }}>
               <Button
                  type="action"
                  onPress={() => { }}
                  add={true}
               >
                  <Icon src={add} />
                  Add to calendar
               </Button>
               <Button
                  type="action"
                  onPress={() => { }}
                  add={false}
               >
                  <Icon src={remove} />
                  Delete All
               </Button>
            </WrapperItem>
         </ActionArea>
         <DashboardTable data={DATA} days={DAYS} />
      </Background>
   )
}