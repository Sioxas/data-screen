<template>
  <div id="app">
    <div class="header">
      <h1>工业大数据可视化分析平台</h1>
    </div>
    <div class="content">
      <div class="left">
        <bubble-chart></bubble-chart>
        <area-stack></area-stack>
        <line-chart></line-chart>
      </div>
      <div class="middle">
        <map-chart></map-chart>
        <heatmap-chart></heatmap-chart>
      </div>
      <div class="right">
        <corona-chart></corona-chart>
        <nightingale-rose-chart></nightingale-rose-chart>
      </div>
    </div>


  </div>
</template>

<script>
  import bubbleChart from './components/bubble-chart.vue'
  import areaStack from './components/area-stack.vue'
  import nightingaleRoseChart from './components/nightingale-rose-chart.vue'
  import mapChart from './components/map-chart.vue'
  import coronaChart from './components/corona-chart.vue'
  import heatmapChart from './components/heatmap-chart.vue'
  import lineChart from './components/line-chart.vue'

  export default {
    name: 'app',
    components: {bubbleChart, areaStack, nightingaleRoseChart, mapChart, coronaChart,heatmapChart,lineChart},
    data(){
      return {}
    },
    methods: {},
    mounted(){

    }
  }
</script>

<style lang="less" rel="stylesheet/less">

  #app {
    @light:#30ebef;
    @default:#2cb6ba;
    @dark:#22787c;
    font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*color: #2c3e50;*/
    background: #18242e;
    height: 100%;
    display: flex;
    flex-direction: column;
    .header {
      color: @default;
      padding-top: 20px;
      text-align: center;
    }
    .content {
      display: flex;
      flex-direction: row;
      .left {

      }

      .middle {
        flex-grow: 1;
      }
      .right {
        display: flex;
        flex-direction: column;
        /*align-items:flex-end;*/
      }
    }

  }
</style>
