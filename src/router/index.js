import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      component: () => import('@/views/login/Login.vue'),
    },
    {
      path: "/",
      component: () => import("@/views/Main.vue"),
      redirect: '/login',
      children: [
        {
          path: "/home",
          name: "home",
          component: () => import("@/views/home/Home.vue")
        },
        {
          path: "/video",
          name: "video",
          component: () => import("@/views/VideoManager/VideoManager.vue")
        },
        {
          path: "/user",
          name: "user",
          component: () => import("@/views/UserManager/UserManager.vue")
        },
        {
          path: "/page1",
          name: "page1",
          component: () => import("@/views/Other/Page1.vue")
        },
        {
          path: "/page2",
          name: "page2",
          component: () => import("@/views/Other/Page2.vue")
        }
      ]
    }
  ]
});
export default router;