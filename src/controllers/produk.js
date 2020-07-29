import axios from 'axios';
const URL_PRODUK = "http://localhost:3001/api/produk"

export function getProduk(){
    return axios.get(URL_PRODUK)
    .then(res => res.data)
    .catch(err => {
        if(err.response.status === 500){
            alert("Database error");
        }
    })
}