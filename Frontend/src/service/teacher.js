import axios from 'axios';
import { data } from 'react-router';


export const addTeacher = async (data) => {
    let response = await axios.post('http://localhost:3000/addteacher', data)
    return response;
}

export const allTeacher = async (data) => {
    let response = await axios.get('http://localhost:3000/allteachers', data)
    return response;
}



export const deleteTeacher = async (id) => {
  let response = await axios.delete(`http://localhost:3000/deleteteacher/${id}`);
  return response;
};


export const getSingleTeacher = async (id) => {
  let response = await axios.get(`http://localhost:3000/singleteacher/${id}`);
  return response;
};

export const updateTeacher = async (id, data) => {
  return await axios.patch(`http://localhost:3000/updateteacher/${id}`, data);
};
