import * as http from './http';

export const setIssues = function (params) {
    return http.getRequest('/repos/'+ localStorage.getItem('repos')+'/issues', params);
};

export const insertIssue = function (params) {
    return http.postRequest('/repos/'+ localStorage.getItem('repos')+'/issues', params);
};

export const updateIssue = function (params) {
    return http.patchRequest('/repos/'+ localStorage.getItem('repos')+'/issues/' + params.number, params);
};

export const lockIssue = function (params) {
    return http.putRequest('/repos/'+ localStorage.getItem('repos')+'/issues/'+params.number+'/lock', params);
};

export const unlockIssue = function (params) {
    return http.deleteRequest('/repos/'+ localStorage.getItem('repos')+'/issues/'+params.number+'/lock');
};
