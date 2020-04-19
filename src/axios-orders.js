import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://reactfarmingapp.firebaseio.com/'
});

export default instance;
