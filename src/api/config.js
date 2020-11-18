import axios from "axios"
import router from "../router"

import ElementUI from "element-ui"
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? "/api" : "http:''www.chst.vip"

axios.defaults.withCredentials = true//允许请求携带认证

//创建请求拦截器，可以给每个请求都带上想要传递的内容
axios.interceptors.request.use(config => {
	// config.url="users/login?name=123"
	//登入注册不需要携带token

	if (config.url == "/users/login") {
		return config
	} else {
		let token = localStorage.getItem('qf2006-token')
		config.headers['authorization'] = token
		return config
	}

})
//响应拦截
axios.interceptors.response.use(config => {
	console.log(config);
	let {data}=config;
	if (data.code==='1004' ||data.code==='10022'){
		//当前后台1004代表token校验失败，10022代表session到期，提示错误并跳转到登陆页面
		
       
		ElementUI.Message.error("登入信息失效，请重新登陆")
		router.push("/login")
	}
	return config
})

axios.create({

	timeout: 4000
})

export default axios 