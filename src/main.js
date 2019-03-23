import Vue from "vue";
import VueRouter from "vue-router";
import "./plugins/vuetify";

import Home from "./pages/Home.vue";
import Profile from "./pages/Profile.vue";
import Skills from "./pages/Skills.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Profile },
    { path: "/skills", component: Skills }
  ]
});

new Vue({
  router,
  render(h) {
    return h(Home);
  }
}).$mount("#app");

import "roboto-fontface/css/roboto/roboto-fontface.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
