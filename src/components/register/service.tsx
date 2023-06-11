import axios from 'axios';
import { BASE_URL } from '../../constant';

const postRegister = (email = '', password= '', name='') => {
    return axios.post(`${BASE_URL}/register`, {
        email,
        password,
        name
    }).catch((err) => err.response);
}

export default { postRegister }