import axios from "axios"

axios.defaults.baseURL=process.env.NODE_ENV==='devlopment' ? "/api":"http:''www.chst.vip"

axios.defaults.withCredentials=true//允许请求携带认证

axios.create({
	
	timeout:4000
})

export default  axios