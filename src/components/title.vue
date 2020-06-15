<template>
  <section>
    <header>
      <div class="fixed-white-title">
        <div class="left" @click="clickLeftBtn">
          <van-icon name="arrow-left" color="#000000" size=".33rem"/>
        </div>
        <slot name="title"></slot>
        <slot name="title-and-right"></slot>

        <div class="right" @click="clickRightBtn">
          <slot name="right-title"></slot>
        </div>
      </div>
      <!--占位-->
      <div class="placeholder-div"></div>
    </header>

  </section>
</template>

<script type="es6">

  export default {
    name: 'llif-title',
    components: {},
    data(){
      return {}
    },
    beforeMount(){

    },
    methods: {
      clickLeftBtn(){
          this.$emit('goBack')
      },
      clickRightBtn(){
        this.$emit('doRight')
      }
    },
    created(){

    },
    mounted(){

    },
    beforeDestroy(){

    }
  }
</script>
<style lang="less" scoped>
  .fixed-white-title {
    width: 100%;
    height: .92rem;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: .02rem solid #EDEDED;
    .left {
      width: 1rem;
      height: .92rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title {
      width: calc(100% - 2rem);
      font-size: 0.32rem;
      font-weight: 400;
      letter-spacing: 0.01rem;
      color: #000;
      display: block;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;
      text-align: center;
    }
    .title-and-right{
      width: calc(100% - 2rem);
      height: .92rem;
      box-sizing: border-box;
      font-size: 0.32rem;
      font-weight: 400;
      color: #000;
      -o-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow-x: hidden;
      text-align: center;
      padding: 0!important;
    }
    .right {
      width: 1rem;
      height: .92rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .right-title{
        color: #323233;
        font-size: .23rem;
      }
    }
  }

  .placeholder-div{
    width: 100%;
    height: .92rem;
    background: #EDEDED
  }
</style>
