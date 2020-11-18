<template>
  <div class="home-page">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <div class="logo"></div>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
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
        <el-header
          ><el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6"
              ><div class="grid-content bg-purple">
                <el-radio-group
                  v-model="isCollapse"
                  style="margin-bottom: 20px"
                >
                  <el-radio-button :label="false">展开</el-radio-button>
                  <el-radio-button :label="true">收起</el-radio-button>
                </el-radio-group>
              </div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">
                千锋管理系统
              </div></el-col
            >
            <el-col :span="6">
              <div class="grid-content bg-purple">
                <el-avatar
                  :size="35"
                  fit="fit"
                  shape="square"
                  src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605701319347&di=7ae8ab33d3626a32ac6c67461b49ca1b&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Ff4d89268d92ba96686c184c1516aae6dcb14b7dd.jpg"
                ></el-avatar>

                <span>欢迎您:</span> &nbsp;&nbsp;
                <b class="nickname">{{userInfo.nickname}}</b
                >&nbsp;
                <span class="quit" @click="quit">退出</span>
              </div></el-col
            >
          </el-row></el-header
        >
        <!-- 主页框-->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>



<script>
</script>


<style scoped>
.quit{
  cursor: pointer;
  color:green;
}
.el-avatar {
  vertical-align: middle;
  margin-right: 5px;
}
.el-header {
  padding: 0;
}
.logo {
  height: 60px;
  background: url("../../assets/img/logo.be8bbddf.png") center no-repeat;
  background-size: cover;
  background-color: #ccc;
}
.el-row {
  margin-bottom: 20px;
  background: linear-gradient(135deg, rgb(76, 103, 255), rgb(86, 53, 223))
    rgb(65, 184, 131);
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
  background-color: yellowgreen;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header,
.el-footer {
  /* background-color:yellowgreen; */
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
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
import { getLoginLog } from "@/api";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"]),
  },
  data() {
    return {
      isCollapse: true,
    };
  },

  mounted() {
    getLoginLog().then((res) => {
      console.log(res);
    });
  },
  methods: {
    quit(){
     //推出登陆
     //1.清除 token和userinfo
     //2.跳转到登陆页面
localStorage.removeItem("qf2006-token")
localStorage.removeItem("qf2006-userInfo")
this.$router.push("/login")

    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>




