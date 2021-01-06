import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import http from '@/api/config.js';
import NProgress from 'nprogress';
import { Message } from 'element-ui';
import './mock';

import 'nprogress/nprogress.css';
import './assets/css/reset.scss'
import 'element-ui/lib/theme-chalk/index.css';


// 进度条配置项这样写
NProgress.configure({
    easing: 'ease',  // 动画方式
    speed: 500,  // 递增进度条的速度
    showSpinner: false, // 是否显示加载ico
    trickleSpeed: 200, // 自动递增间隔
    minimum: 0.3 // 初始化时的最小百分比
 });
 // 路由跳转前钩子函数中 - 执行进度条开始加载
 router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
 });
 // 路由跳转后钩子函数中 - 执行进度条加载结束
 router.afterEach(() => {
  NProgress.done();
 });


Vue.use(ElementUI);
Vue.prototype.$message = Message;
Vue.prototype.$http = http;
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
