<template>
  <div style="height:100%;overflow:auto;padding-top: 34px;">
    <div class="tit">你想制作什么样的网站呢</div>
    <div class="occupationlist">
      <div class="item" v-for="(item , index) in 4" @click="Next('个人博客')" :key="index">
        <div class="img">
          <img class="img1" src="../assets/bg2.png" alt />
          <img class="img2" src="../assets/bghover.png" alt />
        </div>
        <div class="title">个人博客</div>
      </div>
    </div>
    <div class="occupationlist">
      <div class="item" v-for="(item , index) in 3" @click="Next('在线商城')" :key="index">
        <div class="img">
          <img class="img1" src="../assets/bg2.png" alt />
          <img class="img2" src="../assets/bghover.png" alt />
        </div>
        <div class="title">在线商城</div>
      </div>
    </div>
    <div class="occupationlist">
      <div class="item" v-for="(item , index) in 4" @click="Next('出口贸易')" :key="index">
        <div class="img">
          <img class="img1" src="../assets/bg2.png" alt />
          <img class="img2" src="../assets/bghover.png" alt />
        </div>
        <div class="title">出口贸易</div>
      </div>
    </div>
    <div class="occupationlist">
      <div class="item" v-for="(item , index) in 3" @click="Next('营销宣传')" :key="index">
        <div class="img">
          <img class="img1" src="../assets/bg2.png" alt />
          <img class="img2" src="../assets/bghover.png" alt />
        </div>
        <div class="title">营销宣传</div>
      </div>
    </div>
    <div class="jump" @click="Next">跳过</div>
  </div>
</template>
<script>
export default {
  name: "occupation",
  methods: {
    Next(val) {
      this.$router.push({
        path: "/alltemp",
        query: { id1: this.$route.query.id, id2: val }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.tit {
  width: 100%;
  text-align: center;
  height: 40px;
  font-size: 28px;
  font-weight: 800;
  line-height: 40px;
  color: rgba(60, 168, 96, 1);
  opacity: 1;

  margin-bottom: 80px;
}
.occupationlist {
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  .item {
    height: 84px;
    background: rgba(245, 245, 245, 1);
    border: 1px solid rgba(221, 221, 221, 1);
    opacity: 1;
    border-radius: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 24px;
    cursor: pointer;
    .img {
      width: 64px;
      height: 64px;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      opacity: 1;
      margin: 0 10px;
      flex-shrink: 0;
      .img1 {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .img2 {
        width: 100%;
        height: 100%;
        display: none;
      }
    }
    .title {
      font-size: 14px;
      font-weight: 400;
      color: rgba(17, 17, 17, 1);
      opacity: 1;
      margin-right: 24px;
      white-space: nowrap;
      margin-right: 24px;
    }
  }
  .item:hover {
    background: #fff;
    .img {
      background: #000;
      .img1 {
        display: none;
      }
      .img2 {
        display: block;
      }
    }
    .title {
      color: #3ca860;
    }
  }
}
.jump {
  margin-top: 56px;
  width: 100%;
  text-align: center;
  color: #3ca860;
  margin-bottom: 158px;
  cursor: pointer;
}
</style>