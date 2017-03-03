<template>
  <div class="heatmap">
    <div id="heatmap"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import G2 from '../config/G2.conf'
  import colors from '../config/colors'
  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {},
    methods: {},
    mounted(){
      let data = [[0, 0, 100], [0, 1, 19], [0, 2, 8], [0, 3, 24], [0, 4, 67], [1, 0, 92], [1, 1, 58], [1, 2, 78], [1, 3, 117], [1, 4, 48], [2, 0, 35], [2, 1, 15], [2, 2, 123], [2, 3, 64], [2, 4, 52], [3, 0, 72], [3, 1, 132], [3, 2, 114], [3, 3, 19], [3, 4, 16], [4, 0, 38], [4, 1, 5], [4, 2, 8], [4, 3, 117], [4, 4, 115], [5, 0, 88], [5, 1, 32], [5, 2, 12], [5, 3, 6], [5, 4, 120], [6, 0, 13], [6, 1, 44], [6, 2, 88], [6, 3, 98], [6, 4, 96], [7, 0, 31], [7, 1, 1], [7, 2, 82], [7, 3, 32], [7, 4, 30], [8, 0, 85], [8, 1, 97], [8, 2, 123], [8, 3, 64], [8, 4, 84], [9, 0, 47], [9, 1, 114], [9, 2, 31], [9, 3, 48], [9, 4, 91]];
      let source = [];
      for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let obj = {};
        obj.name = item[0];
        obj.day = item[1];
        obj.sales = item[2];
        source.push(obj);
      }
      let chart = new G2.Chart({
        id: 'heatmap',
        forceFit: true,
        height: 450,
        plotCfg: {
          margin: [20, 80, 60, 85]
        }
      });
      chart.source(source, {
        name: {
          type: 'cat',
          values: ['Alexander', 'Marie', 'Maximilian', 'Sophia', 'Lukas', 'Maria', 'Leon', 'Anna', 'Tim', 'Laura']
        },
        day: {
          type: 'cat',
          values: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        }
      });
      chart.axis('name', {
        title: null,
        grid: {
          line: {
            stroke: '#d9d9d9',
            lineWidth: 1,
            lineDash: [2, 2]
          }
        }
      });
      chart.axis('day', {
        title: null
      });
      chart.polygon()
        .position('name*day')
        .color('sales', '#22787c-#2cb6ba')
        .label('sales', {
          offset: -2,
          label: {
            fill: colors.LIGHT,
            fontWeight: 'bold'
          }
        })
        .style({
          lineWidth: 1,
          stroke: colors.LIGHT
        });
      chart.render();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #heatmap {
    width: 700px;
  }
</style>
