import axios from 'axios';
const URL_TRANSAKSI = "http://localhost:3001/api/transaksi"

export function getTransaksi(){
    return axios.get(URL_TRANSAKSI)
    .then(res => res.data)
    .catch(err => {
        if(err.response.status === 500){
            alert("Database error");
        }
    })
}