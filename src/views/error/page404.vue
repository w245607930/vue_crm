<template>
      <section class="container">
        <p class="a1">4<img src="https://intellif-1257847209.cos.ap-guangzhou.myqcloud.com/duck-color.gif"/>4</p>
        <p class="a2">抱歉，找不到此页面~</p>
        <p class="a3">
          <van-button type="info" size="small" hairline block to="homePage" round class="btn">返回首页</van-button>
        </p>
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
.container{
  background: #fff;

}
  .a1{
    text-align: center;
    margin-top: 1rem;
    font-size: 2rem;
    img{
      margin: 0 -.3rem;
    }
  }
  .a2{
    color: #1A88C3;
    font-size: .4rem;
    text-align: center;
  }
  .a3{
    margin-top: 1.5rem;
    padding: 0 .5rem;
  }
</style>
