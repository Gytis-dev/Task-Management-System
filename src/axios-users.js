import axios from 'axios'

const instance = axios.create({
baseURL: 'https://gmds-e4950-default-rtdb.firebaseio.com/'
});
export default instance;