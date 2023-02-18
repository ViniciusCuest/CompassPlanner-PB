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
import axios, { AxiosResponse } from 'axios';
import { useAuth } from '../../hooks/AuthConext';
import { Modal } from '../../components/Modal';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

export type ObjDays = Array<{
   day: string;
   color: string;
}>

export type DataDashboard = Array<{
   _id: number;
   createdAt: string;
   dayOfWeek: string;
   items?: Array<{
      key: number
      description: string;
   }>
}>

export default function Dashboard() {

   const token = localStorage.getItem("@Compass-planner:token");

   const { userData } = useAuth();
   const navigate = useNavigate();

   const _DATA: DataDashboard = [
      {
         _id: 2,
         dayOfWeek: 'monday',
         createdAt: '11:30',
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
         }
         ]
      },
      {
         _id: 4,
         dayOfWeek: 'tuesday',
         createdAt: '15:30',
         items: [{
            key: 1,
            description: 'New Task'
         }]
      },
      {
         _id: 3,
         dayOfWeek: 'wednesday',
         createdAt: '14:30',
         items: [{
            key: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
         }]
      },
   ];

   const [modal, setModal] = useState<boolean>(false);
   const [currentDay, setCurrentDay] = useState<string>('monday');
   const [wetherData, setWeatherData] = useState<unknown>({});
   const [data, setData] = useState<DataDashboard | []>([]);

   const [inputError, setInputError] = useState<boolean>(false);

   const [loading, setLoading] = useState<boolean>(true);
   const [deleteAll, setDeleteAll] = useState<boolean>(false);
   const [addNew, setAddNew] = useState<boolean>(false);

   const [hour, setHour] = useState<string>('');
   const taskRef = useRef<HTMLInputElement>(null);
   const SelectRef = useRef<HTMLSelectElement>(null);


   const DAYS: ObjDays = [
      { day: 'Monday', color: `${colors.red}` },
      { day: 'Tuesday', color: `${colors.orange100}` },
      { day: 'Wednesday', color: `${colors.yellow}` },
      { day: 'Thursday', color: `${colors.pink_400}` },
      { day: 'Friday', color: `${colors.orange50}` },
      { day: 'Saturday', color: `${colors.yellow100}` },
      { day: 'Sunday', color: `${colors.pink_300}` },
   ];


   const deleteAllTasks = () => {
      setData(prev => prev.filter(item => item.dayOfWeek.toLowerCase() !== currentDay.toLowerCase()));
   }

   const handleDeleteAllTasks = (e: UIEvent) => {
      e.preventDefault();
      setModal(true);
   }

   const handleAddNewTask = async (e: UIEvent) => {
      e.preventDefault();

      if (String(SelectRef.current?.value).length < 4 || String(taskRef.current?.value).length < 3) {
         setInputError(true);
         return;
      }

      const response = await axios.post('https://latam-challenge-2.deta.dev/api/v1/events', {
         description: taskRef.current?.value,
         dayOfWeek: SelectRef.current?.value
      }, {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userData.token}`
         }
      });

      if (response.status === 201)
         setCurrentDay(String(SelectRef.current?.value.toLowerCase()));

      /*  const checkValues =
            !!data.find((i) => i.hour === hour)?.hour &&
            !!data.find((i) => i.day === SelectRef.current?.value.toLowerCase())?.day;
   
         let randomID: number = Math.floor(Math.random() * 100);
   
         if (!checkValues) {
   
            !!data.findIndex(item => item.id === randomID) ?
               setData((prev: any | DataDashboard) => [...prev,
               {
                  id: Math.floor(Math.random() * 100),
                  hour,
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
                  hour,
                  day: SelectRef.current?.value.toLowerCase(),
                  items: [{
                     key: randomID,
                     description: taskRef.current?.value
                  }]
               }]);
            setInputError(false);
            return;
         }
   
         const arrayCopy = [...data];
         const elementId = arrayCopy.findIndex((i: any) => i.hour === hour && i.day === SelectRef.current?.value.toLowerCase());
         const newAddedItem: any = [...arrayCopy[elementId].items, {
            key: randomID,
            description: taskRef.current?.value
         }];
   
         const newArray: any = arrayCopy.filter((i) => i.id !== arrayCopy[elementId].id);
   
         setData([...newArray, {
            id: arrayCopy[elementId].id,
            hour: arrayCopy[elementId].hour,
            day: arrayCopy[elementId].day,
            items: newAddedItem
         }]);
    */
   }

   const handleGetEvents = async () => {
      try {
         await axios.get(`https://latam-challenge-2.deta.dev/api/v1/events?dayOfWeek=${currentDay}`, {
            headers: {
               'content-type': 'application/json; charset=utf-8',
               'Authorization': `Bearer ${userData.token}`
            }
         }).then((response: AxiosResponse) => {
            let array = _DATA.filter((item) => item.dayOfWeek === 'monday');

            for (let i = 0; i < array.length; i++) {
               response.data.events.push({
                  _id: array[i]._id,
                  createdAt: array[i].createdAt,
                  dayOfWeek: array[i].dayOfWeek,
                  items: array[i].items
               });
            }
            setData(response.data);
         }).catch(err => {
            throw new Error(err);
         }).finally(() => {
            setLoading(false);
         });
      } catch (err: any) {
         console.log(err);
      }
   }

   async function handleGetWeatherData(): Promise<void> {
      await API.get(`/weather?q=${!!userData.city ? userData.city : 'são paulo'}&appid=${process.env.REACT_APP_API_KEY}&units=metric`,
         {
            headers: {
               "Content-Type": "application/json;charset=utf-8"
            }
         }).then((res: AxiosResponse) => {
            setWeatherData(res.data);
         }).catch((e) => {
            throw new Error(e);
         }).finally(() => {
            //loading = false 
         });
   }

   useEffect(() => {
      if (!userData || !token) {
         navigate('/');
         return;
      }
      //handleGetWeatherData();
      handleGetEvents();
   }, []);

   useEffect(() => {
      handleGetEvents();
   }, [currentDay]);

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
                  style={{ borderColor: inputError ? colors.red : '' }}
               />
               <Inputs
                  reference={SelectRef}
                  type={'select'}
                  options={DAYS}
                  style={{ borderColor: inputError ? colors.red : '' }}
               />
               <Inputs
                  value={hour}
                  type={'time'}
                  onChange={setHour}
                  style={{ width: 120, borderColor: inputError ? colors.red : '' }}

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
            loading={loading}
            currentActive={currentDay}
            setCurrent={setCurrentDay}
         />
         <Modal
            active={modal}
            onActiveModal={setModal}
            action={setDeleteAll}
            options={[
               { title: 'No', action: () => { setModal(false); }, type: 'no' },
               { title: 'Delete all Tasks', action: () => { deleteAllTasks(); setModal(false); }, type: 'delete' }
            ]}
         />
      </Background>
   )
}