import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../view/Login.vue"),
      meta: { needLogin: false },
    },
    {
      path: "/home",
      name: "home",
      redirect: "/operationalData",
      component: () => import("../view/Home.vue"),
      meta: { needLogin: true },
      children: [
        {
          path: "/operationalData",
          name: "operationalData",
          component: () => import("../view/OperationalData.vue"),
          meta: { needLogin: true },
        },
        {
          path: "/staffManagement",
          name: "staffManagement",
          component: () => import("../view/StaffManagement.vue"),
          meta: { needLogin: true },
        },
        {
          path: "/attendanceStatistics",
          name: "attendanceStatistics",
          component: () => import("../view/AttendanceStatistics.vue"),
          meta: { needLogin: true },
        },
        {
          path: "/salaryReport",
          name: "salaryReport",
          component: () => import("../view/SalaryReport.vue"),
          meta: { needLogin: true },
        },
        {
          path: "/systemManagement",
          name: "systemManagement",
          component: () => import("../view/SystemManagement.vue"),
          meta: { needLogin: true },
        },
      ],
    },
  ],
});

// 登录权限判断
router.beforeEach(function(to, from, next) {
  if (to.meta.needLogin) {
    if (sessionStorage.getItem("token")) {
      //本地存储中是否有token(uid)数据
      next(); //表示已经登录
    } else {
      next({
        name: "login",
      });
    }
  } else {
    next();
  }
});

// 解决在VUE中路由遇到Error: Avoided redundant navigation to current location:报错显示是路由重复，
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
