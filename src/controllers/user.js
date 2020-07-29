import axios from 'axios';
const URL_USER = "http://localhost:3001/api/user"

export function getUser(){
    return axios.get(URL_USER)
    .then(res => res.data)
    .catch(err => {
        if(err.response.status === 500){
            alert("Database error");
        }
    })
}