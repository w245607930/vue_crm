<template>
  <section>
    <div class="fixed-menu-list" v-if="$route.meta.showMenu">
      <div :class="$route.path==='/homePage' ? 'fixed-menu-item-active' : 'fixed-menu-item'" @click="$router.push('/homePage')">
        <van-icon
          :name="$route.path==='/homePage' ? 'wap-home' : 'wap-home-o'"
          :color="$route.path==='/homePage' ? '#1989fa' : ''"
          size=".5rem"/>
        <span class="fixed-menu-item-title">首页</span>
      </div>

      <div :class="$route.path==='/work' ? 'fixed-menu-item-active' : 'fixed-menu-item'" @click="$router.push('/work')">
        <van-icon
          :name="$route.path==='/work' ? 'todo-list' : 'todo-list-o'"
          :color="$route.path==='/work' ? '#1989fa' : ''"
          size=".5rem"/>
        <span class="fixed-menu-item-title">工作</span>
      </div>
      <div :class="$route.path==='/user' ? 'fixed-menu-item-active' : 'fixed-menu-item'" @click="$router.push('/user')">
        <van-icon
          :name="$route.path==='/user' ? 'smile' : 'smile-o'"
          :color="$route.path==='/user' ? '#1989fa' : ''"
          size=".5rem"/>
        <span class="fixed-menu-item-title">我的</span>
      </div>
    </div>

    <router-view></router-view>
  </section>
</template>

<script type="es6">

  export default {
    components: {},
    data(){
      return {}
    },
    beforeMount(){

    },
    methods: {},
    created(){

    },
    mounted(){

    },
    beforeDestroy(){

    }
  }
</script>
<style lang="less" scoped>
  .fixed-menu-list {
    width: 100%;
    height: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    background: #fff;
    padding-bottom: env(safe-area-inset-bottom);
    padding-bottom: constant(safe-area-inset-bottom);
    z-index: 10;
    .fixed-menu-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .fixed-menu-item-title {
        margin-top:.05rem;
        font-size: .2rem;
        color:#9b9b9b;
      }
    }
    .fixed-menu-item-active{
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span{
        margin-top:.05rem;
        font-size: .2rem;
        color: #1989fa;
      }
    }
  }
</style>
