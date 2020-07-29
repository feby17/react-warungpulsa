import axios from 'axios';
const URL_LOGIN = "http://localhost:3001/api/login"

export function Login(username,password){
    return axios.post(URL_LOGIN,{"username":username,"password":password})
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        if(err.response.status === 500){
            alert("Username / Password salah. Silahkan login kembali");
        }
    })
}