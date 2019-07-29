import * as types from './types';
import * as api from '@/api/github';
import router from '../../router'

export const loginAction =  async ({ commit }, params) => {
    commit(types.LOGIN_USUARIO, params)
    router.push('/listar')
};

export const logoutAction =  async ({ commit }) => {
    commit(types.LOGOUT_USUARIO)
    router.push('/')
};

export const setIssuesAction = async ({ commit }, params) => {
    api.setIssues(params)
        .then(
            (response) => {
                const { data } = response
                commit(types.SET_ISSUES, data)
            }
        ).catch(
            (e) => {
                throw new TypeError(e, 'error', 10);
            }
        )
};

export const insertIssueAction = async ({ commit, dispatch }, params) => {
    api.insertIssue(params)
        .then(
            (response) => {
                const { data } = response
                commit(types.INSERT_ISSUE, data)
                dispatch('setIssuesAction')
            }
        ).catch(
            (e) => {
                throw new TypeError(e, 'error', 10);
            }
        )
};

export const lockIssueAction = async ({ commit, dispatch}, params) => {
    api.lockIssue(params)
        .then(
            (response) => {
                const { data } = response
                dispatch('setIssuesAction')
            }
        ).catch(
            (e) => {
                throw new TypeError(e, 'error', 10);
            }
        )
};

export const unlockIssueAction = async ({ commit, dispatch}, params) => {
    api.unlockIssue(params)
        .then(
            (response) => {
                const { data } = response
                dispatch('setIssuesAction')
            }
        ).catch(
            (e) => {
                throw new TypeError(e, 'error', 10);
            }
        )
};

export const updateIssueAction = async ({ commit, dispatch}, params) => {
    api.updateIssue(params)
        .then(
            (response) => {
                const { data } = response
                commit(types.INSERT_ISSUE, data)
                dispatch('setIssuesAction')
            }
        ).catch(
            (e) => {
                throw new TypeError(e, 'error', 10);
            }
        )
};
