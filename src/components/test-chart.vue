<template>
    <div id="test-chart">
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts'

//import { mixOption } from './../config/echarts.conf'

export default {
    name:'testChart',
    mounted() {
        let areaStackChart = echarts.init(document.getElementById('test-chart'))
        areaStackChart.setOption({
            xAxis: [{
                name:'漂亮',
                type:'value',
                min:60
            }],
            yAxis:[{
                data:['漂亮'],
                type:'category'
            }],
            series:[
                {
                    data:[120],
                    name:'亲亲',
                    stack:'总量',
                    type:'bar'
                },
                {
                    data:[120],
                    name:'抱抱',
                    stack:'总量',
                    type:'bar'
                },
                {
                    data:[120],
                    name:'举高高',
                    stack:'总量',
                    type:'bar'
                },
                {
                    data:[120],
                    name:'亲亲',
                    stack:'总量',
                    type:'bar'
                }
            ]
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#test-chart {
    height: 200px;
    width:100%;
}
</style>
