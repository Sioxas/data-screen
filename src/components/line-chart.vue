<template>
    <div class="line-chart">
        <ui-frame title="动态数据">
            <div id="line-chart"></div>
        </ui-frame>
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts'
import {mixOption} from './../config/echarts.conf'
import uiFrame from './ui-frame.vue'
export default {
    components: { uiFrame },
    mounted() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = echarts.init(document.getElementById('line-chart'))
        // 绘制图表
        myChart.setOption(mixOption({
            xAxis: {
                data: ["轮毂01", "轮毂02", "轮毂03", "轮毂04", "轮毂05", "轮毂06"],
            },
            series: [{
                name: '产量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        }))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#line-chart {
    height:200px;
}
</style>
