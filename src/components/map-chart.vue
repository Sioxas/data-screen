<template>
  <div class="map-chart">
    <div id="china-map"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import G2 from '../config/G2.conf'
  import colors from '../config/colors'
  import {China_map as mapData} from '../mock/China_map.js'
  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {},
    methods: {},
    mounted(){
      let Stat = G2.Stat;
      let userData = [];
      let features = mapData.features;
      for(let i=0; i<features.length; i++) {
        let name = features[i].properties.name;
        userData.push({
          "name": name,
          "value": Math.round(Math.random()*1000)
        });
      }
      let chart = new G2.Chart({
        id: 'china-map',
        forceFit: true,
        height: 450,
        plotCfg: {
          margin: [50, 80]
        }
      });
      chart.source(userData);
      chart.axis(false);
      chart.polygon().position(Stat.map.region('name', mapData))
        .color('value', '#22787c-#2cb6ba')
        .label('name', {label: {fill: colors.LIGHT, shadowBlur: 5, shadowColor: colors.LIGHT}})
        .style({
          stroke: colors.LIGHT,
          lineWidth: 1
        });
      chart.render();
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #china-map{
    width:700px;
  }
</style>
