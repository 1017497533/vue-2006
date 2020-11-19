import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/style/base.css"
import "@/assets/style/el-rest.css"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入iconfont
import './assets/iconfont/iconfont.css'
Vue.use(ElementUI);
Vue.config.productionTip = false;
//路由前置钩子(导航守卫)
router.beforeEach((to,fro,next)=>{
  //用户等入职后，lcoalstorage之中有token
  let token=localStorage.getItem('qf2006-token')
  if (token){
    //如果注册或者登陆，直接放行
    next()
  }else{//没token 判断是否为登陆页面
   if (to.path=="/login"){
     next()
   }else{//访问的不是登录页面，跳转到登陆页面
    next({path:"/login"})

   }
  }
})

//按需引入
// import {Carousel,CarouselItem} from "element-ui"

//注册全局

// Vue.component('el-carousel',Carousel)
// Vue.component('el-carousel-item',CarouselItem)
import "./utils/recursionRoutes.js"
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
