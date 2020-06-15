<template>
  <div>

    <div id="proviceMap" :style="{width: '100%', height: '550px'}"></div>



  </div>
</template>

<script>
  import echarts from 'echarts'
  require('echarts/map/js/china')

export default {
  name: 'Provice',
  data () {
    return {
      Province: ''
    }
  },
  methods: {
    drawMap(){
      var myChart= echarts.init(document.getElementById('proviceMap'));
      this.Province = this.$route.query.name;
      console.log(this.Province)
      let option = {
        tooltip: {
          trigger: 'item',
          formatter: '{b}'
        },
        series: [
          {
            name: '中国',
            type: 'map',
            mapType: this.Province,
            selectedMode : 'single',
            label: {
              normal: {
                show: true
              },
              emphasis: {
                show: true
              }
            },
            data:[

            ]
          }
        ]
      };
//      myChart.on('click', function (params){
//        changeMap();
//      });
      myChart.setOption(option);
      window.addEventListener("resize",function(){
        myChart.resize();
      });
    }
  },
  mounted(){
    this.drawMap();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
