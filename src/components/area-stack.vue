<template>
  <div class="area-stack">
    <ui-frame title="层叠图">
          <div id="area-stack"></div>
    </ui-frame>
  </div>
</template>

<script type="text/ecmascript-6">
  import TWEEN from 'tween.js'
  import uiFrame from './ui-frame.vue'
  import G2 from '../config/G2.conf'
  import * as area_stack from '../mock/area-stack.js'
  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {uiFrame},
    methods: {},
    mounted(){

      let Stat = G2.Stat
      let chart = new G2.Chart({
        id: 'area-stack',
        forceFit: true,
        height: 200
      });
      chart.source(area_stack.asia_data, {
        year: {
          type: 'linear',
          tickInterval: 25
        },
        '..percent': {
          formatter: function (value) {
            value = value || 0;
            value = value * 100;
            return parseInt(value);
          },
          alias: 'percent(%)'
        }
      });
      chart.areaStack().position(Stat.summary.percent('year*value'))
        .color('country', ['#ffd54f', '#ef6c00', '#1976d2', '#64b5f6'])
        .shape('smooth')
      chart.render();

      function animate(time) {
        requestAnimationFrame(animate)
        TWEEN.update(time)
      }

      new TWEEN.Tween(area_stack.assemble_obj(area_stack.asia_value_1))
        .to(area_stack.assemble_obj(area_stack.asia_value_2),500)
        .repeat( Infinity )
        .onUpdate(function(){
            chart.changeData(area_stack.assign_value(this,area_stack.asia_data))
        }).start()

      animate()

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .area-stack{
    width:500px;
  }
</style>
