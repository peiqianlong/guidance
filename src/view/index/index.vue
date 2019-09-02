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
      <div class="headerright">
        <el-input class="searchinput" v-model="searchval" placeholder="search"></el-input>
        <div class="tips">
          <i class="iconfont icon-manage_icon_message4"></i>
          <span></span>
        </div>
        <div class="username">
          <span>summer</span>
          <div class="img"></div>
        </div>
      </div>
    </div>
    <section>
      <transition name="slide-fade">
        <router-view />
      </transition>
    </section>
    <footer>Copyright © 2009-2019 ecer.com. All rights reserved.</footer>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      isactive: 1,
      searchval: ""
    };
  },
  methods: {
    SelectMenu(val) {
      this.isactive = val;
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
      .searchinput {
        width: 440px;
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
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-leave-to {
  transform: translate(100%);
}
// .slide-fade-enter-active {
//   transition: all 0.3s ease;
// }
// .slide-fade-leave-active {
//   transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
// }
// .slide-fade-enter {
//   transform: translateX(-100%);
//   opacity: 1;
// }
// .slide-fade-leave-to
// /* .slide-fade-leave-active for below version 2.1.8 */ {
//   transform: translateX(100%);
//   opacity: 0;
// }
</style>
