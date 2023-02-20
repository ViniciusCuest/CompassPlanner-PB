import { useEffect, useRef, useState } from 'react';
import {
   Header,
   Inputs,
   Button,
   Background,
   DashboardTable
} from '../../components';

import { ActionArea, Icon, WrapperItem } from "./styled";
import Transition from 'react-transition-group/Transition';


import logoBlack from '../../assets/compass-logo-black.png';
import mainImage from '../../assets/uol-logo.png';
import add from '../../assets/plus.svg';
import remove from '../../assets/dash.svg';
import { colors } from '../../global/theme';
import { API, API_LATAM } from '../../utils/api';
import axios, { AxiosResponse } from 'axios';
import { useAuth } from '../../hooks/AuthConext';
import { Modal } from '../../components/Modal';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { Toast, Response } from '../../components/Toast';

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

   const nodeRef = useRef(null);
   const nodeRef2 = useRef(null);

   const _DATA: DataDashboard = [
      {
         _id: 2,
         dayOfWeek: 'monday',
         createdAt: String(new Date()),
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
         createdAt: String(new Date()),
         items: [{
            key: 1,
            description: 'New Task'
         }]
      },
      {
         _id: 3,
         dayOfWeek: 'wednesday',
         createdAt: String(new Date()),
         items: [{
            key: 1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit"
         }]
      },
   ];

   const [modal, setModal] = useState<boolean>(false);
   const [toast, setToast] = useState<Response>({
      active: false,
      loading: false,
      success: false,
      error: false,
      message: ''
   });

   const [currentDay, setCurrentDay] = useState<string>('monday');
   const [wetherData, setWeatherData] = useState<unknown>({});
   const [data, setData] = useState<DataDashboard | []>([]);

   const [inputError, setInputError] = useState<boolean>(false);

   const [loading, setLoading] = useState<boolean>(true);

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

   const handleDeleteAllTasks = (e: UIEvent) => {
      e.preventDefault();
      setModal(true);
   }

   const deleteAllTasks = async () => {

      setToast(prev => {
         return {
            ...prev,
            message: `Wait... Removing all events of ${currentDay}`,
            active: true,
            loading: true
         }
      })
      setModal(false);

      setTimeout(async () => {
         const response = await API_LATAM.delete(`/events?dayOfWeek=${currentDay}`);
         if (response.status === 200) {
            setToast(prev => {
               return {
                  ...prev,
                  message: `All events of ${currentDay} were removed 😥`,
                  loading: false,
                  success: true
               }
            });
         }
      }, 1000);

      //setToast(true)

      //setData(prev => prev.filter(item => item.dayOfWeek.toLowerCase() !== currentDay.toLowerCase()));
   }

   const handleAddNewTask = async (e: UIEvent) => {
      e.preventDefault();

      const selectValue = String(SelectRef.current?.value);

      if (selectValue.length < 4 || String(taskRef.current?.value).length < 3) {
         setInputError(true);
         return;
      }

      setToast(prev => {
         return {
            ...prev,
            message: `Scheduling an event for ${selectValue}...`,
            active: true,
            loading: true
         }
      });

      const response = await API_LATAM.post('/events', {
         description: taskRef.current?.value,
         dayOfWeek: selectValue
      });

      if (response.status === 201) {
         setToast(prev => {
            return {
               ...prev,
               message: `New event added for ${selectValue}! 😉`,
               loading: false,
               success: true
            }
         });

         return currentDay === selectValue.toLowerCase() ?
            handleGetEvents() :
            setCurrentDay(selectValue.toLowerCase());
      }
      //

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
         await API_LATAM.get(`/events?dayOfWeek=${currentDay}`).then(
            (response: AxiosResponse) => {
               if (response.data?.events?.length) {
                  let array = _DATA.filter((item) => item.dayOfWeek === currentDay);
                  for (let i = 0; i < array.length; i++) {
                     response.data.events.push({
                        _id: array[i]._id,
                        createdAt: array[i].createdAt,
                        dayOfWeek: array[i].dayOfWeek,
                        items: array[i].items
                     });
                  }
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
      if (token === 'null') {
         navigate('/');
         return;
      }
      //handleGetWeatherData();
      handleGetEvents();
   }, []);

   useEffect(() => {
      setLoading(true);
      handleGetEvents();
      setData([]);
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
            onLoading={setLoading}
            loading={loading}
            updateEvents={handleGetEvents}
            currentActive={currentDay}
            setCurrent={setCurrentDay}
            toast={setToast}
         />
         <Transition
            in={toast.active}
            nodeRef={nodeRef2}
            timeout={2000}
            mountOnEnter
            unmountOnExit
         >
            {
               state => (
                  <Toast
                     Noderef={nodeRef2}
                     response={toast}
                     onClose={setToast}
                     active={
                        state === 'entering' ?
                           true :
                           state === 'entered' ?
                              true : false
                     }
                  />
               )
            }
         </Transition>

         <Transition
            in={modal}
            nodeRef={nodeRef}
            duration={300}
            timeout={300}
            mountOnEnter
            unmountOnExit
         >
            {state => (
               <Modal
                  message="Are you sure you want to delete all events ?"
                  refNode={nodeRef}
                  active={
                     state === 'entering' ?
                        true :
                        state === 'entered' ?
                           true : false
                  }
                  onActiveModal={setModal}
                  options={[
                     {
                        title: 'Delete all Tasks',
                        action: () => {
                           deleteAllTasks();
                        },
                        type: 'delete'
                     },
                     {
                        title: 'Cancel',
                        action: () => {
                           setModal(false);
                        },
                        type: 'no'
                     },
                  ]}
               />)
            }

         </Transition>
      </Background>
   )
}