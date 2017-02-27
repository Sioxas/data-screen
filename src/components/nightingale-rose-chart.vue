<template>
  <div class="nightingale-rose-chart">

      <div id="nightingale-rose-chart"></div>

  </div>
</template>

<script type="text/ecmascript-6">
  import uiFrame from './ui-frame.vue'
  import G2 from '../config/G2.conf'
  import {nightingale_rose_chart} from '../mock/mock.js'
  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {uiFrame},
    methods: {},
    mounted(){
//      G2.Global.setTheme('dark')
      let chart = new G2.Chart({
        id: 'nightingale-rose-chart',
        forceFit: true,
        height: 450,
        plotCfg: {
          margin: [10, 10, 0,50]
        }
      });
      chart.source(nightingale_rose_chart, {
        'cost': {
          min: 0
        }
      });
      chart.coord('polar', {
        startAngle: Math.PI, // 起始角度
        endAngle: Math.PI * (3 / 2) // 结束角度
      });
      chart.axis('cost', {
        labels: null
      });
      chart.axis('country', {
        gridAlign: 'middle',
        labels: {
          label: {
            textAlign: 'right' // 设置坐标轴 label 的文本对齐方向
          }
        }
      });
      chart.legend(false);
      chart.interval().position('country*cost')
        .color('country','rgb(44, 182, 186)-rgb(44, 182, 186)')
        .label('cost',{offset: -15,label: {textAlign: 'center', fill: '#fff'}})
        .style({
          lineWidth: 1,
          stroke: 'rgb(44, 182, 186)'
        });
      chart.render();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nightingale-rose-chart{
    width:380px;
  }
</style>
