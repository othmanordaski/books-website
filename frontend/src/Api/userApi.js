import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000',
    headers:{
        'Content-Type': 'application/json'
    }
})

export function loginUser(body) {
    return api.post('/user/login', body)
}

export function registerUser(body) {
    return api.post('/user/register', body)
}


export function getALLbooks(){
    return api.get('/book')
}




export default api