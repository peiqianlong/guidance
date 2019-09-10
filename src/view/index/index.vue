<template>
  <div class="appindex">
    <div class="appheader">
      <div class="headerleft">
        <div class="logo">
          <img src="../../assets/ecer_logo@2x.png" alt />
        </div>
        <ul>
          <li :class="[isactive==1 ? 'isactive' :'']" @click="SelectMenu(1)">我的网站</li>
          <li :class="[isactive==2 ? 'isactive' :'']" @click="SelectMenu(2)">探索</li>
          <li :class="[isactive==3 ? 'isactive' :'']" @click="SelectMenu(3)">帮助</li>
        </ul>
      </div>
      <div class="headerright" v-if="headershow">
        <div class="input" v-if="routerpath">
          <el-input
            class="searchinput"
            v-on:keyup.enter="search"
            v-model="searchval"
            placeholder="search"
          ></el-input>
          <i @click="search" class="iconfont icon-sousuo"></i>
        </div>
        <div class="tips">
          <i class="iconfont icon-manage_icon_message4"></i>
          <span></span>
        </div>
        <div class="username" @mouseenter="enter" @mouseleave="leave">
          <span>{{info.username}}</span>
          <div class="img"></div>
        </div>
        <transition name="fade">
          <div class="rightPro" v-if="rightshow" @mouseenter="enter2" @mouseleave="leave2">
            <div class="info">
              <div class="info_left">
                <i class="iconfont icon-manage_icon_mail"></i>
                <!-- <p>邮箱</p> -->
              </div>
              <div class="info_right">{{info.email}}</div>
            </div>
            <div class="info">
              <div class="info_left">
                <i class="iconfont icon-manage_icon_phone"></i>
                <!-- <p>联系方式</p> -->
              </div>
              <div class="info_right">15709242457</div>
            </div>
            <div class="info">
              <div class="info_left">
                <i class="iconfont icon-manage_icon_user"></i>
                <!-- <p>用户类型</p> -->
              </div>
              <div class="info_right">超级管理员</div>
            </div>
            <div class="btnout">
              <el-button class="btn1" plain>修改</el-button>
              <el-button class="btn2" type="primary" @click="outLogin">退出</el-button>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <section style="overflow: hidden;">
      <transition name="slide-fade">
        <router-view />
      </transition>
    </section>
    <footer>Copyright © 2009-2019 ecer.com. All rights reserved.</footer>
  </div>
</template>
<script>
import { LoginLog, LoginOut } from "../../api/apis";
export default {
  name: "index",
  data() {
    return {
      isactive: 1,
      searchval: "",
      headershow: false,
      rightshow: false,
      info: {
        email: "amdin.com",
        username: "admin"
      }
    };
  },
  created() {
    this.Log();
  },
  methods: {
    SelectMenu(val) {
      this.isactive = val;
      if (val == 1) {
        this.$router.push("/index");
      }
    },
    search() {},
    Log() {
      LoginLog().then(res => {
        if (res.data.status == 0) {
          this.info = res.data.data;
          this.$router.push("/index");
          this.headershow = true;
        } else {
          this.$router.push("/temp");
          // this.headershow = true;
        }
      });
    },
    enter() {
      this.rightshow = true;
    },
    enter2() {
      this.rightshow = true;
      this.timeOut = true;
    },
    leave() {
      setTimeout(() => {
        if (!this.timeOut) {
          this.rightshow = false;
        }
      }, 300);
    },
    leave2() {
      setTimeout(() => {
        this.rightshow = false;
        this.timeOut = false;
      }, 300);
    },
    outLogin() {
      LoginOut().then(res => {
        if (res.data.status == 0) {
          localStorage.clear();
          window.location.reload();
          this.$router.push("/temp");
        }
      });
      // localStorage.clear();
      // window.location.reload();
      // this.$router.push("/login");
    }
  },
  computed: {
    routerpath() {
      let path = this.$route.path;
      if (
        path == "/" ||
        path == "/occupation" ||
        path == "/website" ||
        path == "/alltemp"
      ) {
        return false;
      } else {
        return true;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.appindex {
  display: flex;
  flex-direction: column;
  height: 100%;
  .appheader {
    height: 64px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 0px rgba(60, 168, 96, 1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .headerleft,
    .headerright {
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
    }
    .headerleft {
      .logo {
        height: 33px;
        width: 111px;
        margin-left: 16px;
        margin-right: 53px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      ul {
        display: flex;
        li {
          margin-right: 48px;
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          color: rgba(101, 101, 101, 0.85);
          position: relative;
          cursor: pointer;
          white-space: nowrap;
        }
        .isactive {
          color: rgba(60, 168, 96, 1);
          font-weight: 600;
        }
        .isactive:before {
          content: "";
          display: block;
          position: absolute;
          height: 3px;
          width: 73%;
          background: rgba(60, 168, 96, 1);
          border-radius: 3px;
          top: 24px;
          left: 50%;
          transform: translateX(-50%);
          transition: all 300ms linear;
        }
      }
    }
    .headerright {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      .input {
        position: relative;
        i {
          position: absolute;
          right: 11px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
        }
        .searchinput {
          width: 440px;
        }
        /deep/.el-input__inner {
          width: 100%;
          height: 36px;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 4px;
          border: none;
          outline: none;
        }
        .el-input__inner::placeholder {
          font-size: 14px;
          font-weight: 400;
          color: rgba(0, 0, 0, 0.65);
        }
      }
      .tips {
        width: 36px;
        height: 36px;
        background: rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        margin: 0 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        cursor: pointer;
        i {
          color: #909090;
          font-size: 18px;
        }
        span {
          width: 4px;
          height: 4px;
          position: absolute;
          border-radius: 50%;
          background-color: #ff1919;
          right: 10px;
          top: 10px;
          z-index: 2000;
        }
      }
      .username {
        height: 36px;
        background: rgba(0, 0, 0, 0.05);
        opacity: 1;
        border-radius: 4px;
        margin-right: 16px;
        display: flex;
        align-items: center;
        cursor: pointer;
        span {
          margin-left: 9px;
          font-size: 14px;
          font-weight: 400;
          color: rgba(34, 34, 34, 1);
          margin-right: 4px;
        }
        .img {
          width: 22px;
          height: 22px;
          background: rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          opacity: 1;
          margin-right: 9px;
        }
      }
      .rightPro {
        position: absolute;
        width: 230px;
        background: rgba(255, 255, 255, 1);
        right: 16px;
        border: 1px solid rgba(221, 221, 221, 1);
        top: 62px;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        opacity: 1;
        border-radius: 4px;
        z-index: 20;
        padding: 16px;
        box-sizing: border-box;
        -moz-user-select: none;
        -o-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        user-select: none;
        background-color: #fff;
        .info {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: start;
          font-size: 16px;
          margin-bottom: 12px;
          height: 18px;
          .info_left {
            display: flex;
            align-items: center;
            align-items: center;
            height: 20px;
            font-size: 14px;
            width: 28px;
            i {
              font-size: 14px;
              margin-right: 14px;
              margin-top: 2px;
              color: rgba(0, 0, 0, 0.65);
            }
            p {
              line-height: 20px;
            }
          }
          .info_right {
            height: 18px;
            font-size: 14px;
            text-align: left;
            color: rgba(0, 0, 0, 0.65);
          }
        }
        /deep/ .btnout {
          margin-top: 16px;
          .el-button {
            background: transparent;
          }
          display: flex;
          .btn1,
          .btn2 {
            border: 1px solid #3ca860;
            box-sizing: border-box;
            flex: 1;
            width: 95px;
            height: 28px;
            align-items: center;
            display: flex;
            padding: 0;
            justify-content: center;
            span {
              font-size: 12px;
            }
          }
          .btn1 {
            color: #3ca860;
          }
          .btn2 {
            flex: 1;
            color: #fff;
            background: #3ca860;
          }
        }
      }
      .fade-enter-active,
      .fade-leave-active {
        transition: opacity 0.5s;
      }
      .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
      }
    }
  }
  section {
    flex: 1;
    overflow: hidden;
    overflow-y: auto;
  }
  footer {
    height: 40px;
    background: rgba(238, 238, 238, 1);
    opacity: 1;
    text-align: center;
    line-height: 40px;
  }
}
.slide-fade-enter {
  transform: translate(-100%);
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-to {
  transform: translate(0%);
}
.slide-fade-leave {
  transform: translate(0%);
}
.slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to {
  transform: translate(100%);
}
</style>
