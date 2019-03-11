import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import UserIndex from "./pages/user/Index";
import UserCreate from "./pages/user/Create";
import UserEdit from "./pages/user/Edit";

const routes = [
  {
    name: "user.index",
    path: "/",
    component: UserIndex
  },
  {
    name: "user.create",
    path: "/create",
    component: UserCreate
  },
  {
    name: "user.edit",
    path: "/edit/:id",
    component: UserEdit,
    props: true
  }
];

export default new VueRouter({
  routes
});
