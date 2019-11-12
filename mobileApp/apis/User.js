import { LOCAL_IP } from 'react-native-dotenv'; 

const baseUrl = `http://${LOCAL_IP}:8080/user`;
const axios = require('axios');

const mapData = (data) => data ? {
    username: data.name,
    userId: data.userid,
} : null;

exports.allUsers = () => {
    return axios.get(`${baseUrl}/all`)
        .then(res => res.data, 
            err => ['Cannot find at ' + baseUrl]);
};

exports.login = (username, password) => {
    if (username === '') {
        return Promise.resolve({ username: 'DEFAULT', userId: 0 });
    }
    return axios.get(`${baseUrl}/login?username=${username}&password=${password}`)
        .then(res => mapData(res.data));
};

exports.createNewUser = (email, username, password) => {
    return axios.put(baseUrl, { email, name: username, password })
        .then(res => mapData(res.data));
};
