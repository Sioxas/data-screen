<template>
  <div class="bubble-chart">
    <ui-frame title="气泡图">
      <div id="bubble-chart"></div>
    </ui-frame>
  </div>
</template>

<script type="text/ecmascript-6">
  import uiFrame from './ui-frame.vue'
  import {bubble} from '../mock/mock.js'
  import G2 from '../config/G2.conf'
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
        id: 'bubble-chart',
        forceFit: true,
        height: 200
      })
      chart.source(bubble, {
        'LifeExpectancy': {
          alias: '人均寿命（年）'
        },
        'Population': {
          type: 'pow',
          alias: '人口总数'
        },
        'GDP': {
          alias: '人均国内生产总值($)'
        },
        'Country': {
          alias: '国家/地区'
        }
      })
      chart.axis('GDP', {
        // 格式化坐标轴的显示
        formatter: function (value) {
          return (value / 1000).toFixed(0) + 'k'
        }
      })
      chart.tooltip({
        title: null // 不显示默认标题
      })
      // 该图表默认会生成多个图例，设置不展示 Population 和 Country 两个维度的图例
      chart.legend('Population', false);
      chart.point().position('GDP*LifeExpectancy')
        .size('Population', 35, 5)
        .color('continent')
        .opacity(0.65)
        .shape('circle')
        .tooltip('Country*Population*GDP*LifeExpectancy')
      chart.render()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
