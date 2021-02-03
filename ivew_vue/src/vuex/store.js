import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//store 中存放的就是全局共享数据
const state = {
  modalShow: true,
};
const mutations = {
  modalShowChange(state) {
    state.modalShow = false;
  },
};
const actions = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
