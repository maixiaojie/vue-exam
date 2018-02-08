<template>
  <div id="app">
    <router-view class="main" />
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
  }
}
</script>

<style>
html, body {
  margin:0;
  padding: 0;
  background-color: #efefef;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,Arial,sans-serif;
  overflow-y: auto;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.vue-toast {
  background: #515151;
  color:white;
  position: fixed;
  left: 45%;
  bottom: 10%;
  width: 10%;
  text-align: center;
  padding: 15px 0;
  border-radius: 5px;
}
</style>
