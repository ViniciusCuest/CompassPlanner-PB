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

export type ObjDays = Array<{
   day: string;
   color: string;
}>

export default function Dashboard() {

   const DAYS: ObjDays = [
      { day: 'Monday', color: `` },
      { day: 'Tuesday', color: `` },
      { day: 'Wednesday', color: `` },
      { day: 'Thrusday', color: `` },
      { day: 'Friday', color: `` },
      { day: 'Saturday', color: `` },
      { day: 'Sunday', color: `` },
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
            <WrapperItem>
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
         <DashboardTable/>
      </Background>
   )
}