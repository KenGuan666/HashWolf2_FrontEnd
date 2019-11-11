import { LOCAL_IP } from 'react-native-dotenv'; 

const baseUrl = `http://${LOCAL_IP}:8080/hashwolf2`;
const axios = require('axios');

exports.allUsers = () => {
    return axios.get(`${baseUrl}/all`)
        .then(res => res.data, 
            err => ['Cannot find at ' + baseUrl]);
}

exports.login = (username, password) => {
    mockNameToId = (username) => username === 'ken' ? 1 : 2;
    const defaultUsername = 'DEFAULT';
    if (username) {
        return {
            username,
            userId: mockNameToId(username),
        };
    }
    return {
        username: defaultUsername,
        userId: 0,
    };
};
