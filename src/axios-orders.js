import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-app-a262d-default-rtdb.firebaseio.com/'
});

export default instance;