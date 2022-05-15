import Vue from "vue";

import Router from "vue-router";

Vue.use(Router);

// import Login from "@/views/login";
// const Login = () => import("@/views/login" /* webpackChunkName: "name" */);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login"),
  },
  {
    path: "/main",
    name: "main",
    component: () => import("@/views/main/index.vue"),
  },
];

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes,
});
