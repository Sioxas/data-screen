<template>
    <div class="bubble-chart">
        <ui-frame title="气泡图">
            <div id="bubble-chart"></div>
        </ui-frame>
    </div>
</template>

<script type="text/ecmascript-6">
import uiFrame from './ui-frame.vue'
import echarts from 'echarts'
import bubbleChartOption from '../mock/bubble_chart'
import {mixOption} from '../config/echarts.conf'
export default {
    components: { uiFrame },
    mounted() {
        let bubbleChart = echarts.init(document.getElementById('bubble-chart'))
        bubbleChart.setOption(mixOption(bubbleChartOption))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    color: #42b983;
}

#bubble-chart{
    height:200px;
    width:400px;
}
</style>
