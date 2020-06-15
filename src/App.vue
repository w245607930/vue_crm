<template>
  <div id="app">
    <!--<div v-if="$route.meta.showLayOut">-->
      <!--<layout></layout>-->
      <!--<router-view v-wechat-title="$route.meta.title"/>-->
    <!--</div>-->

    <!--<router-view v-wechat-title="$route.meta.title" v-else/>-->

    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
  import Layout from "./layout/nav";
export default {
  components: {Layout},
  name: 'App'
}
</script>

<style>
  #app{
    width: 100%;
    height: 100%;
    background: #EDEDED;
  }
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
