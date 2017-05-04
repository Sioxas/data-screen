<template>
    <div class="corona-chart">
        <div id="corona-chart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts'
import { mixOption } from './../config/echarts.conf'
import coronaOption from './../mock/corona'
export default {
    mounted() {
        let coronaChart = echarts.init(document.getElementById('corona-chart'))
        coronaChart.setOption(mixOption(coronaOption))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#corona-chart {
    width: 380px;
    height:380px;
}
</style>
