import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhost:3000',
    headers:{
        'Content-Type': 'application/json'
    }
})

export function createBook(body) {
    return api.post('/book', body);
}

export function updateAbook(id, body) {
    return api.patch(`/book/${id}`, body); // Include id in the URL path
}

export function getAllBooks() {
    return api.get('/book');
}

export function getBookById(id) {
    return api.get(`/book/${id}`); // Include id in the URL path
}

export function deleteAbook(id) {
    return api.delete(`/book/${id}`); // Include id in the URL path
}

export default api;