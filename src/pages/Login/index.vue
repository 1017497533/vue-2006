<template>
  <div class="login-page">
    <div class="container">
    <el-form :model="loginForm"
     status-icon 
     :rules="rules" 
     ref="loginForm" 
     label-width="100px" 
     class="demo-loginForm">
     <h1 >千锋管理系统</h1>
  <el-form-item label="用户名" prop="username">
    <el-input type="text" v-model="loginForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
  </el-form-item>
 
<video autoplay loop muted>

<source src="../../assets/video/bg_video.mp4"
 type="video/mp4">

</video>

  <el-form-item>
    <el-button class="button" type="success" @click="submitForm('loginForm')">提交</el-button>
    
  </el-form-item>
</el-form>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      /**
       * @param {object} rule 表单验证对象
       * @param {string} value 输入的值
       * @param {function}  callback 校验通过不传参 不通过传参
       */
      var validateUsername = (rule, value, callback) => {
//用户名正则，4到16位（字母，数字，下划线，减号）
       var uPattern = /^[a-zA-Z0-9_-]{3,16}$/;
       if(!uPattern.test(value)){
         callback('请输入3到16位（字母，数字，下划线，减号）')

       }else{
         callback()
       }
        
        // if (value === '') {
        //   callback(new Error('请输入用户名'));
        // } else {
        //   if (this.loginForm.password !== '') {
        //     this.$refs.loginForm.validateField('password');
        //   }
        //   callback();
        // }
      };
      var validatePassword = (rule, value, callback) => {
      var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
       if(!uPattern.test(value)){
         callback('请输入4到16位（字母，数字，下划线，减号）的密码')

       }else{
         callback()
       }
        
      };
      return {
        loginForm: {
          username: '',
          password: ''
          
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
         
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
h1{
  text-align:center;
  margin-top:70px;
  margin-bottom: 60px;
  color:white;
}
.login-page{
 
  height: 100%;
  width:100%;
  overflow: hidden;
   
  
}
.container{
  
  width:25rem;
  height:30.47619rem;
 border:1px solid rgba(0, 0, 0, .2);
  background:rgba(1, 1, 1, .2);
  border-radius: 10px;
  position: absolute;
  top: 15%;
  left:60%;
  transform: (-50%,-50%);
  text-align:center;
 
}
.button{
    width:249px;
    height: 40px;
    transition-property: all;
    transition-duration: 0.1s;
    transition-timing-function: ease;
    transition-delay: 0s;
    
  }

.el-form-item--feedback{
  width:400px;
  height: 41px;
}


  video{
    position:fixed;
    right:0px;
    bottom: 0px;
    min-width: 100%;
    min-height: 100%;
    height: auto;
    width:auto;
    z-index:-100
  }
  source{
    min-width: 100%;
    min-height: 100%;
    height: auto;  
    width:auto;
 
 }
 el-input{
   outline: 0;
   border:1px solid #ccc;
 }
  
 
</style>
