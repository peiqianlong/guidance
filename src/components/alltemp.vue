<template>
  <div class="reycle">
    <div>
      <div class="temp">
        <div class="mytemp">
          <div class="temoleft">
            <el-select @change="getInfo" v-model="value" placeholder="请选择">
              <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id"></el-option>
            </el-select>
            <el-select
              @change="getInfo"
              v-model="value2"
              placeholder="请选择"
              style="margin-left:12px"
            >
              <el-option
                v-for="item in options2"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
          <div class="temoright">
            <el-select @change="getInfo" v-model="value3" placeholder="请选择">
              <el-option
                v-for="item in options3"
                :key="item.id"
                :label="item.label"
                :value="item.id"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div class="tep_list container-fluid">
          <div class="row" style="margin:0;">
            <div
              class="templist col-lg-3 col-md-4 col-sm-6 col-xs-12"
              v-for="(item,index) in templist"
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
                  <!-- <span class="money">￥6.9</span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  alltemp,
  alltemptype,
  alltempindustry,
  temppreview,
  edittemp,
  LoginLog
} from "../api/apis";
export default {
  name: "alltemp",
  data() {
    return {
      options: [],
      value: "",
      options2: [],
      value2: "",
      options3: [
        {
          id: "created_at",
          label: "热门"
        },
        {
          id: "user_num",
          label: "最新"
        }
      ],
      value3: "created_at",
      templist: [],
      login: ""
    };
  },
  created() {
    this.getInfo();
    this.list();
  },
  methods: {
    list() {
      alltemptype().then(res => {
        this.options2 = res.data.data.types;
      });
      alltempindustry().then(res => {
        this.options = res.data.data.industries;
      });
      LoginLog().then(res => {
        this.login = res.data.status;
      });
    },
    getInfo() {
      let prams = {
        type: this.value2,
        industry: this.value,
        sort: this.value3
      };
      alltemp(prams).then(res => {
        if (res.data.status == 0) {
          this.templist = res.data.data.themes;
        }
      });
    },
    //预览
    preview(val) {
      temppreview(val).then(res => {
        window.open("http:" + res.data.data.preview_url, "_black");
      });
    },
    //编辑
    starttemp(val, type) {
      edittemp({ site_id: val }).then(res => {
        window.location.href =
          "http://www.site.maoyt.com/index.html#/index/:" + type;
      });
    }
  }
};
</script>
<style lang="less" scoped>
.reycle {
  width: 100%;
  height: 100%;
  overflow: auto;
  .temp {
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
    opacity: 1;
    border-radius: 4px;
    padding-bottom: 34px;
    padding-left: 23px;
    padding-right: 23px;
    padding-top: 0;
    margin: 16px;
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
        display: flex;
        align-items: center;
        /deep/ .el-select {
          .el-input__inner {
            width: 240px;
            background: rgba(0, 0, 0, 0.02);
            border: 1px solid rgba(0, 0, 0, 0.0784313725490196);
            opacity: 1;
            border-radius: 4px;
          }
        }
      }
      .temoleft {
        justify-content: flex-start;
      }
      .temoright {
        justify-content: flex-end;
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
}
.newecer {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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