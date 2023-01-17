import {
   Header,
   Inputs,
   Button,
   Background
} from '../../components';
import { ActionArea, Icon, WrapperItem } from "./styled";

import logoBlack from '../../assets/compass-logo-black.png';
import mainImage from '../../assets/uol-logo.png';
import add from '../../assets/plus.svg';
import remove from '../../assets/dash.svg';

export default function Dashboard() {

   const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday', 'Sunday']

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
      </Background>
   )
}