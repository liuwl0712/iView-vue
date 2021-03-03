import Vue from "vue";
import App from "./App.vue";
// 引入iview组件库
import ViewUI from "view-design";
import "view-design/dist/styles/iview.css";
// 引入全局sass
import "./assets/sass/app.scss";
// 引入vue-router
import router from "./router";
// 引入动画效果库
import animated from "animate.css/animate.css";
// 引入vuex
import store from "./vuex/store.js";
// 引入echarts
import * as echarts from "echarts";
// 引入封装好的axios
import * as axios from "./utils/contract.js";
Vue.prototype.$echarts = echarts;

Vue.use(animated);
Vue.use(ViewUI);

Vue.config.productionTip = false;
Vue.prototype.$base_url = process.env.VUE_APP_BASEURL; //获取请求头地址
Vue.prototype.$axios = axios; //全局使用

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
