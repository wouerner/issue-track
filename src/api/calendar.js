import * as http from './http';

export const getCalendar = function (params) {
    return http.postRequest('/repos/'+ localStorage.getItem('repos')+'/issues', params);
};
