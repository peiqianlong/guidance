<template>
  <div class="newecer">
    <div class="tit">您还没有创建网站哦,</div>
    <div class="tit">马上创建一个属于您的个性化网站吧！</div>
    <div class="ecerbtn">
      <router-link to="/make">新建网站</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "newindexecer"
};
</script>
<style lang="less" scoped>
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