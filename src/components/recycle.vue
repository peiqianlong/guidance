<template>
  <div class="reycle">
    <div v-if="true">
      <div class="temp">
        <div class="mytemp">
          <div class="temoleft">
            <div class="tit">垃圾网站</div>
            <div class="ftit">选择垃圾站的网站，还原或者移除它。</div>
          </div>
          <div class="temoright">
            <div class="laji">垃圾网站</div>
            <div class="newecer">新建网站</div>
          </div>
        </div>
        <div class="tep_list container-fluid">
          <div class="row" style="margin:0;">
            <div
              class="templist col-lg-3 col-md-4 col-sm-6 col-xs-12"
              v-for="item in 20"
              :key="item"
            >
              <div class="list">
                <div class="boxshow">
                  <img src="../assets/temp.png" alt />
                  <div class="zhezhao">
                    <div class="start">开始编辑</div>
                  </div>
                </div>
                <div class="Explain">
                  <span>活力明亮极简风多用途模板</span>
                  <span class="free">未发布</span>
                  <!-- <span class="money">￥6.9</span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="newecer" v-else>
      <div class="tit">垃圾站中没有网站哦,</div>
      <div class="tit">您目前还没有删除网站到垃圾站中。</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "recycle"
};
</script>
<style lang="less" scoped>
.reycle {
  width: 100%;
  height: 100%;
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
          border: 1px solid rgba(0, 0, 0, 0.0784313725490196);
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          border-radius: 8px;
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
            }
            .zhezhao {
              position: absolute;
              width: 100%;
              height: 100%;
              left: 0;
              top: 0;
              background: rgba(0, 0, 0, 0.6);
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