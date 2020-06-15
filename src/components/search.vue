<template>
  <section class="search">
    <llif-title @goBack="$router.go(-1)" @doRight="value=''">
      <van-search
      slot="title-and-right"
      v-model="value"
      shape="round"
      placeholder="请输入搜索关键词"
      @search="onSearch"
      @cancel="onCancel"
      class="title-and-right"
      />
      <span slot="right-title" class="right-title">取消</span>
    </llif-title>

    <div class="assets-list">
      <div class="each-group">
        <div class="each-item" v-for="item in 5" @click="$router.push('/approval/assetDetail')">
          <div class="left">
            <img src="http://img11.360buyimg.com/n1/s180x180_jfs/t1/72491/3/12873/377529/5da42b52Ed7e74fe7/dc58cef9d899ab6b.jpg"/>
          </div>
          <div class="right">
            <span class="name">小米 显示器 23.8英寸 IPS技术硬屏 三微边设计 低蓝光无可视频闪</span>
            <span class="timeAndStatus">2019-02-20
                    <span>领用</span>
                </span>
          </div>
        </div>
      </div>

    </div>


  </section>
</template>

<script type="es6">
  import {Toast} from 'vant';
  import LlifTitle from "@/components/title";

  export default {
    name: 'llif-search',
    components: {LlifTitle},
    data(){
      return {
        value: ''
      }
    },
    beforeMount(){

    },
    methods: {
      onClickLeft() {
        this.$router.go(-1)
      },
      onClickRight() {
        Toast('按钮');
      },
      onSearch(val) {
        Toast(val);
      },
      onCancel() {
        Toast('取消');
      },
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
  .search {

  }

  header {
    position: fixed;
    left: 0;
    top:0;
    z-index: 10;
    background: #fff;
    border-bottom: 1px solid #f6f6f6;
    .left{
      width: 1rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    height: .92rem;
    display: flex;
    align-items: center;
    padding-right: .33rem;
    .search-input{
        width: calc(100vw - 1rem);
      height: 100%;
    }
  }

.assets-list{
  background: #fff;
  /*border-top: 1rem solid #EDEDED;*/
  .each-group{
    padding: 0 0.6rem .2rem;
    .each-item{
      height: 2.8rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: .01rem solid #D9D9D9;
      .left{
        width: 2rem;
        height: 2rem;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .right{
        width: calc(100vw - 3.5rem);
        height: 2rem;
        padding: .2rem .1rem;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .name{
          width: 100%;
          font-size: 0.28rem;
          color: #333333;
          font-weight: bold;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          text-overflow: ellipsis;
          -webkit-line-clamp:2;
          overflow: hidden;
        }
        .timeAndStatus{
          font-size: 0.22rem;
          color: #666666;
        }
      }
    }
    .each-item:last-child{
      border-bottom: none!important;
    }

  }
}
</style>
