import axios from 'axios';

const url = 'http://127.0.0.1:5000/api';

export function addUser(postData){
  return axios.post(`${url}/join`, postData)
    .then(response => {
      console.log(response)
        //return response;
    })
    .catch(error => {
      console.log(error);
    });
}
export function loginUser(postData){
  return axios.post(`${url}/login`, postData)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    });
}

export function logoutUser() {
  return axios.get(`${url}/logout`)
    .then(response => {
      console.log(response)
    });
}

export function surveyData(postData) {
  return axios.post(`${url}/survey`, postData)
    .then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log(error);
    });
}
