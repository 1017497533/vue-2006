import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/style/base.css"
import "@/assets/style/el-rest.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.config.productionTip = false;


//按需引入
// import {Carousel,CarouselItem} from "element-ui"

//注册全局

// Vue.component('el-carousel',Carousel)
// Vue.component('el-carousel-item',CarouselItem)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
