<template>
  <div class="line-chart">
    <ui-frame title="动态数据">
      <div id="line-chart"></div>
    </ui-frame>
  </div>
</template>

<script type="text/ecmascript-6">
  import G2 from '../config/G2.conf'
  import colors from './../config/colors'
  import uiFrame from './ui-frame.vue'
  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {uiFrame},
    methods: {},
    mounted(){
      // 模拟数据
      var base = +new Date(2014, 9, 3);
      var oneDay = 24 * 3600 * 1000;
      var date = [];
      var data = [];
      var values = [Math.random() * 150];
      var now = new Date(base);

      function addData(shift) {
        var item = {};
        now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
        item.date = now;
        item.value = (Math.random() - 0.4) * 10 + values[values.length - 1];
        values.push(item.value);
        now = new Date(+new Date(now) + oneDay);
        data.push(item);
        if (!init)
          data.shift()
      }

// 创建图表
      var chart = new G2.Chart({
        id: 'line-chart',
        forceFit: true, // 宽度自适应
        height: 300,
      });
// 声明字段度量类型
      chart.source(data, {
        date: {
          type: 'time',
        },
        value: {
          type: 'linear',
        }
      });
      chart.tooltip({
        crosshairs: true,
      });
      chart.line().position('date*value').size(3);
      chart.area().position('date*value');
      chart.render();
      var init = true;
      setInterval(function () {
        if (init) { // 第一次载入数据
          for (var i = 1; i < 100; i++) {
            addData();
          }
          init = false;
        }
        addData();
        chart.changeData(data); // 动态更新数据
      }, 700);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line-chart {
    width: 500px;
  }
</style>
