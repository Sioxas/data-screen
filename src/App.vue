<template>
  <div id="app">
    <div class="left">
      <bubble-chart></bubble-chart>
      <area-stack></area-stack>
    </div>
    <div class="middle">
      <map-chart></map-chart>
    </div>
    <div class="right">
      <nightingale-rose-chart></nightingale-rose-chart>
    </div>


  </div>
</template>

<script>
  import bubbleChart from './components/bubble-chart.vue'
  import areaStack from './components/area-stack.vue'
  import nightingaleRoseChart from './components/nightingale-rose-chart.vue'
  import mapChart from './components/map-chart.vue'

  export default {
    name: 'app',
    components:{bubbleChart,areaStack,nightingaleRoseChart,mapChart},
    data(){
      return {}
    },
    methods: {},
    mounted(){

    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  #app {
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #18242e;
    height:100%;
    display:flex;
    flex-direction:row;
    .left{

    }

    .middle{
      flex-grow:1;
    }
    .right{
      display:flex;
      align-items:flex-end;
    }
  }
</style>
