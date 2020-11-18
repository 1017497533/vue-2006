<template>
  <div class="home-page">
   <el-container>
     <!-- 侧边栏 -->
  <el-aside width="200px">
   <div class="logo"></div>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">

  
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">导航一</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
  </el-aside>
  <el-container>
    <!-- 顶部栏 -->
    <el-header><el-row type="flex" class="row-bg" justify="space-between">
  <el-col :span="6"><div class="grid-content bg-purple">
     <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
    
    
    </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple-light">千锋管理系统</div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
    <span class="sss"></span>
    <span>欢迎您:</span> &nbsp;&nbsp;
    <span class="nick_name">五五开</span>&nbsp;
    <span class="quit">退出</span>
    
    
    </div></el-col>
</el-row></el-header>
    <!-- 主页框-->
    <el-main>Main</el-main>
  </el-container>
</el-container>
  </div>
</template>



<script>



</script>


<style scoped>
.el-header{
  padding: 0;
}
.logo{
  height: 60px;
  background:url("../../assets/img/logo.be8bbddf.png")  center  no-repeat;
  background-size: cover;
  background-color: #ccc;


}
 .el-row {
    margin-bottom: 20px;
   background: linear-gradient(135deg, rgb(76, 103, 255), rgb(86, 53, 223)) rgb(65, 184, 131);
   
  }
  .el-row:nth-last-child {
      margin-bottom: 0;
    }
  .el-col {
    border-radius: 4px;
  }
  /* .bg-purple-dark {
   background-color:yellowgreen;
  }
  .bg-purple {
    background-color:yellowgreen;
  }
  .bg-purple-light {
    background-color:yellowgreen;
  } */
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color:yellowgreen;
    
  }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;}
  .el-header, .el-footer {
    /* background-color:yellowgreen; */
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
<script>
  export default {
    data() {
      return {
        isCollapse: true
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>




