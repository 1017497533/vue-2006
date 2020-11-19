import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../pages/Login";
import allRoutes from "./allRoutes"

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component:  Login
  },
  
  
];

const router = new VueRouter({
  routes
});

export default router;
