import axios from 'axios';
const URL_PELANGGAN = "http://localhost:3001/api/pelanggan"

export function getPelanggan(){
    return axios.get(URL_PELANGGAN)
    .then(res => res.data)
    .catch(err => {
        if(err.response.status === 500){
            alert("Database error");
        }
    })
}