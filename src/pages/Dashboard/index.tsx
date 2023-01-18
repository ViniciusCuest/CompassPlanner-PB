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
         id: 3,
         day: 'tuesday',
         hour: '14:30',
         items: [{
            key: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
         }]
      }
   ];

   const DAYS: ObjDays = [
      { day: 'Monday', color: `${colors.red}` },
      { day: 'Tuesday', color: `${colors.orange800}` },
      { day: 'Wednesday', color: `${colors.yellow}` },
      { day: 'Thrusday', color: `${colors.pink_400}` },
      { day: 'Friday', color: `${colors.orange100}` },
      { day: 'Saturday', color: `${colors.yellow100}` },
      { day: 'Sunday', color: `${colors.pink_300}` },
   ];

   return (
      <Background
         currentPage="Dashboard"
         background={mainImage}
      >
         <Header logo={logoBlack} />
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