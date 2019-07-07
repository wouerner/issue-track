import * as types from './types';

export const state = {
  user: {},
  issues: [],
};

export const mutations = {
  [types.LOGIN_USUARIO](state, params) {
      localStorage.setItem('token', btoa(params.login + ":" + params.password));
      localStorage.setItem('repos', params.repos);
      state.user = params;
  },
  [types.LOGOUT_USUARIO](state) {
      localStorage.removeItem('token');
      localStorage.removeItem('repos');
      state.user = {};
  },
  [types.SET_ISSUES](state, params) {
    state.issues = params;
  },
};
