<template>
  <div style="height:100%;overflow:auto;padding-top: 34px;">
    <div class="tit">下面是Ecer推荐给您的模板,尽情享用吧</div>
    <div class="temp">
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
                  <div class="pre" @click="preview(item.id)">预览</div>
                  <div class="start" @click="starttemp(item.site_id,item.type)">开始编辑</div>
                </div>
              </div>
              <div class="Explain">
                <span>{{item.title}}</span>
                <span
                  class="free"
                  :style="{'color':item.price == 'Free' ? '#777777': '#3CA860'}"
                >{{item.price}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="morebtn" @click="GoTempMore">探索更多模板</div>
  </div>
</template>
<script>
import { temptuijian, edittemp, temppreview, LoginLog } from "../api/apis";
export default {
  name: "temp",
  data() {
    return {
      tempinfo: "",
      login: ""
    };
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      temptuijian({ limit: 30 }).then(res => {
        this.tempinfo = res.data.data.themes;
      });
      LoginLog().then(res => {
        this.login = res.data.status;
      });
    },

    GoTempMore() {
      this.$router.push("/occupation");
    },
    //预览
    preview(val) {
      temppreview(val).then(res => {
        window.open("http:" + res.data.data.preview_url, "_black");
      });
    },
    //编辑
    starttemp(val, type) {
      if (this.login == 203) {
        this.$message({
          type: "info",
          message: "请先登陆或注册"
        });
        return;
      }
      // } else {
      let prams = { site_id: val };
      edittemp(prams).then(res => {
        window.location.href =
          "http://www.site.maoyt.com/index.html#/index/:" + type;
      });
      // }
    }
  }
};
</script>

<style lang="less" scoped>
.tit {
  width: 100%;
  height: 40px;
  font-size: 28px;
  font-weight: 600;
  line-height: 40px;
  color: rgba(60, 168, 96, 1);
  opacity: 1;
  text-align: center;
  line-height: 40px;
  margin-bottom: 20px;
}
.temp {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 1;
  border-radius: 4px;
  padding: 34px;
  padding-left: 23px;
  padding-right: 23px;
  margin: 0 16px;
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
            height: 100%;
            width: 100%;
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
          line-height: 42px;
          display: flex;
          justify-content: space-between;
          span:first-child {
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            color: rgba(0, 0, 0, 0.65);
            line-height: 42px;
            width: 200px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .free {
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            color: rgba(0, 0, 0, 0.65);
            opacity: 1;
            line-height: 42px;
          }
        }
      }
    }
  }
}
.morebtn {
  width: 160px;
  height: 40px;
  background: rgba(60, 168, 96, 1);
  opacity: 1;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 40px;
  margin: 0 auto;
  margin-top: 16px;
  margin-bottom: 20px;
  cursor: pointer;
}
</style>