import Vue from 'vue';
import Vuex from 'vuex';
import github from './store/github/index';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    github,
  },
  debug: true,
});
