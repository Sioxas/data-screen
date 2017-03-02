<template>
  <div class="corona-chart">
    <div id="corona-chart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import G2 from '../config/G2.conf'
  import colors from '../config/colors'
  import data from './../mock/page-views'
  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {},
    methods: {},
    mounted(){
      let chart = new G2.Chart({
        id: 'corona-chart',
        forceFit: true,
        height: 450,
        plotCfg: {
          margin: [30, 30,30,30]
        }
      });
      chart.source(data, {
        views: {
          max: 25,
          min: 0,
          nice: false
        },
        hour: {
          ticks: ['0', '3', '6', '9', '12', '15', '18', '21']
        }
      });
      chart.coord('polar', {
        inner: 0.35
      });
      chart.axis('hour', {
        grid: null,
        formatter: function (val) {
          if (val * 1 >= 12) {
            return val + ' pm';
          } else {
            return val + ' am';
          }
        }
      });
      chart.axis('views', {
        tickLine: null,
        line: null,
        grid: {
          line: {
            lineDash: [0, 0]
          }
        }
      });
      chart.legend(false);
      chart.area()
        .position('hour*views')
        .color('page', ['#cd57a4', '#b236a3', '#fa6f7f', '#fa7c3b', '#e96b6b'])
        .shape('smooth')
        .opacity(0.25);
      chart.render();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .corona-chart{
    width:380px;
  }
</style>
