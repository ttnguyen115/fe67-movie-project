import axios from 'axios';

const TokenCybersoft = process.env.REACT_APP_CYBERSOFT_TOKEN;

const axiosClient = axios.create({
    baseURL: 'https://movienew.cybersoft.edu.vn/api',
    headers: {
        TokenCybersoft: TokenCybersoft,
    }
});

export default axiosClient;