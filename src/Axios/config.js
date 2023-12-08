import axios from "axios";

const apiRequests = axios.create({
    baseURL: 'https://redux-cms.iran.liara.run/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

apiRequests.interceptors.request.use(
    (config) => {
        // console.log('config => ', config);
        return config
    },

    (error) => {
        // console.log("error => ", error);
        return Promise.reject(error);
    }
);


apiRequests.interceptors.response.use(
    (response) => {
        // console.log('response =>', response);
        return response
    },
    (error) => {
        // console.log('error =>', error);
        return Promise.reject(error)
    }
);


export default apiRequests