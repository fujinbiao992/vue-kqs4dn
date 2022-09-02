// import Vue from 'vue';
import Vuex from 'vuex';
// Vue.use(Vuex);
const Store = new Vuex({
  state: {
    tableArr: [],
  },
  mutation: {
    romoveData(state, ctx) {
      state.tableArr = ctx;
    },
  },
});
export default Store;
