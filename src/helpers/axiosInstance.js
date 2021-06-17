import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';
import { navigate } from '../navigations/SideMenu/rootNavigator';


let headers = {};

const axiosInstance = axios.create({
    baseURL: envs.BACKEND_URL,
    headers,
});


axiosInstance.interceptors.request.use(async (config) => {

    const token = await AsyncStorage.getItem("token");
    //do authorization
    if (token) {
        //so here in `` we have to put the default value and then token itself
        //ex: `Bearer ${token}`
        config.headers.Authorization = token;
    }

    return config;

}, (error) => {
    return Promise.reject(error);
},
);

axiosInstance.interceptors.response.use(response => new Promise((resolve, reject) => {
    resolve(response);
}), (error) => {

    if (!error.response) {
        return new Promise((resolve, reject) => {
            reject(error);
        })
    }
    if (error.response.status === 403) {
        navigate(LOGOUT, { tokenExpired: true });
    }
    else {
        return new Promise((resolve, reject) => {
            reject(error);
        })
    }
})

export default axiosInstance;