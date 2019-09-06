<template>
  <div style="height:100%;overflow:auto;padding:16px;">
    <div v-if="show" class="temp">
      <div class="mytemp">
        <div class="temoleft">
          <div class="tit">我的网站</div>
          <div class="ftit">选择一个网站编辑，或者开始制作一个新网站。</div>
        </div>
        <div class="temoright">
          <div class="laji" @click="() => {$router.push('/recycle')}">垃圾网站</div>
          <div class="newecer" @click="() => {$router.push('/')}">新建网站</div>
        </div>
      </div>
      <div class="tep_list container-fluid">
        <div class="row" style="margin:0;">
          <div
            class="templist col-lg-3 col-md-4 col-sm-6 col-xs-12"
            v-for="(item,index) in tempinfo"
            :key="index"
          >
            <div class="list">
              <div class="boxshow">
                <img src="../assets/temp.png" alt />
                <div class="zhezhao">
                  <div class="icon">
                    <i class="iconfont icon-icon_more" @click="openul(index)"></i>
                    <transition name="el-fade-in-linear">
                      <ul v-show="showul==index">
                        <li @click="preview(item.id)">预览</li>
                        <li @click="rename(item.id)">重命名</li>
                        <li @click="copy(item.id)">复制</li>
                        <li @click="fabu(item.id)">发布</li>
                        <li @click="deltemp(item.id)">删除</li>
                      </ul>
                    </transition>
                  </div>
                  <div class="start" @click="starttemp(item.id)">开始编辑</div>
                </div>
              </div>
              <div class="Explain">
                <span>{{item.name}}</span>
                <span
                  class="free"
                  :style="{'color':item.status == '未发布' ? '#777777': '#3CA860'}"
                >{{item.status}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="newecer">
      <div class="img">
        <img src="../assets/web_img_empty@2x.png" alt />
      </div>
      <div class="tit">您还没有创建网站哦,</div>
      <div class="tit">马上创建一个属于您的个性化网站吧！</div>
      <div class="ecerbtn" @click="()=>{$router.push('/')}">新建网站</div>
    </div>
  </div>
</template>
<script>
import { mytemp, edittemp, temppreview } from "../api/apis";
export default {
  name: "mytemp",
  data() {
    return {
      show: true,
      showul: -1,
      tempinfo: ""
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      let prams = {
        name: ""
      };
      mytemp(prams).then(res => {
        this.tempinfo = res.data.data.sites;
      });
    },
    openul(val) {
      if (val == this.showul) {
        this.showul = -1;
      } else {
        this.showul = val;
      }
    },
    //开始编辑
    starttemp(val) {
      edittemp({ site_id: val }).then(res => {
        window.open("http://www.site.maoyt.com", "_black");
      });
    },
    //预览
    preview(val) {
      temppreview(val).then(res => {
        window.open("http:" + res.data.data.preview_url, "_black");
      });
    },
    rename(val) {},
    deltemp(val) {},
    copy(val) {},
    fabu(val) {}
  }
};
</script>

<style lang="less" scoped>
.temp {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 1;
  border-radius: 4px;
  padding-bottom: 34px;
  padding-left: 23px;
  padding-right: 23px;
  padding-top: 0;
  .mytemp {
    height: 106px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 11px;
    .temoleft,
    .temoright {
      height: 100%;
      flex: 1;
    }
    .temoleft {
      .tit {
        height: 28px;
        font-size: 20px;
        font-weight: 600;
        line-height: 28px;
        color: rgba(0, 0, 0, 1);
        margin-top: 34px;
        margin-bottom: 4px;
      }
    }
    .temoright {
      display: flex;
      justify-content: flex-end;
      .laji {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        color: rgba(85, 85, 85, 1);
        margin-top: 50px;
        cursor: pointer;
      }
      .newecer {
        width: 100px;
        height: 40px;
        background: rgba(60, 168, 96, 1);
        opacity: 1;
        border-radius: 4px;
        margin-left: 20px;
        margin-top: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        opacity: 1;
      }
    }
  }
  .tep_list {
    padding: 0;
    .templist {
      padding: 0 11px;
      .list {
        height: 240px;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 1);
        border: 1px solid rgba(221, 221, 221, 1);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
        margin-bottom: 24px;
        padding: 12px 12px 0px 12px;
        box-sizing: border-box;
        .boxshow {
          flex: 1;
          box-sizing: border-box;
          overflow: hidden;
          position: relative;

          img {
            width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
          }
          .zhezhao {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            background: rgba(0, 0, 0, 0.8);
            border-radius: 2px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            transform: translateY(-100%);
            transition: all 150ms linear;
            .icon {
              position: absolute;
              width: 36px;
              height: 36px;
              z-index: 10;
              right: 0px;
              top: 0px;
              line-height: 36px;
              i {
                color: #fff;
                font-size: 30px;
                position: absolute;
                cursor: pointer;
              }
              ul {
                background: #fff;
                position: absolute;
                top: 36px;
                left: -21px;
                border: 1px solid rgba(221, 221, 221, 1);
                box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.12);
                border-radius: 4px;
                li {
                  line-height: 22px;
                  padding: 0 5px;
                  white-space: nowrap;
                  cursor: pointer;
                }
                li:hover {
                  background: rgba(245, 245, 245, 1);
                }
              }
            }

            .pre,
            .start {
              width: 120px;
              height: 40px;
              cursor: pointer;
              margin: 4px 0;
              text-align: center;
              line-height: 40px;
              border-radius: 4px;
              font-size: 14px;
              font-weight: 400;
            }
            .pre {
              border: 1px solid rgba(70, 185, 108, 1);

              color: rgba(70, 185, 108, 1);
            }
            .start {
              background: rgba(70, 185, 108, 1);
              color: rgba(255, 255, 255, 1);
            }
          }
        }
        .boxshow:hover {
          .zhezhao {
            transform: translateY(0%);
          }
        }
        .Explain {
          height: 42px;
          display: flex;
          justify-content: space-between;
          span:first-child {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            line-height: 42px;
            color: rgba(0, 0, 0, 0.65);
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .free {
            font-size: 14px;
            font-weight: 600;
            line-height: 42px;
            color: rgba(0, 0, 0, 0.65);
          }
        }
      }
    }
  }
}
</style>
<style lang="less" scoped>
.newecer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .img {
    width: 236px;
    height: 212px;
    margin-bottom: 36px;
    flex-shrink: 0;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .tit {
    width: 272px;
    height: 25px;
    font-size: 16px;
    font-weight: 400;
    line-height: 28px;
    color: rgba(0, 0, 0, 0.65);
    text-align: center;
  }
  .ecerbtn {
    width: 120px;
    height: 40px;
    background: rgba(60, 168, 96, 1);
    opacity: 1;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    line-height: 40px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    opacity: 1;
    margin-top: 24px;
    cursor: pointer;
    a {
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>