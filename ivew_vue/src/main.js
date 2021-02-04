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
Vue.prototype.$echarts = echarts;

Vue.use(animated);
Vue.use(ViewUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
