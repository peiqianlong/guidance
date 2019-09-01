<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
@import url("http://at.alicdn.com/t/font_1207594_x7s7a1lmxg.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: rgba(245, 245, 245, 1);
  height: 100%;
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
}
a{
  text-decoration: none;
}
html,
body {
  height: 100%;
  width: 100%;
}
</style>
