import axios from 'axios';
import { BASE_URL } from '../../constant';

const fetchLogin = (email = '', password= '') => {
    return axios.post(`${BASE_URL}/login`, {
        email,
        password
    }).catch((err) => err.response);
}

export default { fetchLogin }