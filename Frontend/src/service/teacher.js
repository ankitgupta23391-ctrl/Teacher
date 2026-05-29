import axios from 'axios';
import { data } from 'react-router';


export const addTeacher = async (data) => {
    let response = await axios.post('https://teacher-2-wbvk.onrender.com/addteacher', data)
    return response;
}

export const allTeacher = async (data) => {
    let response = await axios.get('https://teacher-2-wbvk.onrender.com/allteachers', data)
    return response;
}



export const deleteTeacher = async (id) => {
  let response = await axios.delete(`https://teacher-2-wbvk.onrender.com/deleteteacher/${id}`);
  return response;
};


export const getSingleTeacher = async (id) => {
  let response = await axios.get(`https://teacher-2-wbvk.onrender.com/singleteacher/${id}`);
  return response;
};

export const updateTeacher = async (id, data) => {
  return await axios.patch(`https://teacher-2-wbvk.onrender.com/updateteacher/${id}`, data);
};
