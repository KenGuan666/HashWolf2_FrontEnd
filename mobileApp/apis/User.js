import { LOCAL_IP } from 'react-native-dotenv'; 

const baseUrl = `http://${LOCAL_IP}:8080/hashwolf2`;
const axios = require('axios');

exports.allUsers = () => {
    return axios.get(`${baseUrl}/all`)
        .then(res => res.data, 
            err => ['Cannot find at ' + baseUrl]);
}
