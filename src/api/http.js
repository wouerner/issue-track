import axios from 'axios';

axios.interceptors.request.use(function (config) {
    return {
        config,
        ...{
            'Authorization': `Basic ${localStorage.getItem('token')}`
        }
    }
}, function (error) {
    return Promise.reject(error);
});

let instance = {};
instance = axios.create({
    baseURL: 'https://api.github.com',
    crossdomain: true,
    headers:{
        'Authorization': `Basic ${localStorage.getItem('token')}`
    }
});

export const getRequest = function (path) {
    return instance.get(path);
};

export const postRequest = (path, data) => instance.post(path, data);

export const putRequest = (path, bodyFormData) => {
    return instance.put(path, bodyFormData);
}

export const patchRequest = (path, bodyFormData) => {
    return instance.patch(path, bodyFormData);
}

export const deleteRequest = (path) => instance.delete(path);

export const HTTP = config => axios.create(config);
