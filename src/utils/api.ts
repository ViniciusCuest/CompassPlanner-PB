import axios from 'axios';

export const API = axios.create({
   baseURL: `${process.env.REACT_APP_API_URL}`
});

export const API_LATAM = axios.create({
   baseURL: `${process.env.REACT_APP_LATAM_URL}`,
   headers: {
      "Content-Type": "application/json;charset=utf-8",
      Authorization: `Bearer ${localStorage.getItem('@Compass-planner:token')}`
   }
});