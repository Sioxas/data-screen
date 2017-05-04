<template>
    <div id="realtime-chart">

    </div>
</template>

<script>
import echarts from 'echarts'
import { mixOption } from './../config/echarts.conf'
export default {
    name:'RealtimeChart',
    mounted() {
        let data = [];
        let now = +new Date(1997, 9, 3);
        let oneDay = 24 * 3600 * 1000;
        let value = Math.random() * 1000;
        for (let i = 0; i < 1000; i++) {
            data.push(randomData());
        }

        function randomData() {
            now = new Date(+now + oneDay);
            value = value + Math.random() * 21 - 10;
            return {
                name: now.toString(),
                value: [
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round(value)
                ]
            }
        }

        let realtimeChart = echarts.init(document.getElementById('realtime-chart'))
        realtimeChart.setOption(mixOption({
            tooltip: {
                trigger: 'axis',
                formatter: function (params) {
                    params = params[0];
                    var date = new Date(params.name);
                    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
                },
                axisPointer: {
                    animation: false
                }
            },
            xAxis: {
                type: 'time',
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%'],
                splitLine: {
                    show: false
                }
            },
            series: [{
                name: '模拟数据',
                type: 'line',
                showSymbol: false,
                hoverAnimation: false,
                data: data
            }]
        }))

        setInterval( () => {

            for (let i = 0; i < 5; i++) {
                data.shift();
                data.push(randomData());
            }

            realtimeChart.setOption({
                series: [{
                    data: data
                }]
            });
        }, 1000)
    }
}
</script>

<style scoped lang="less">
#realtime-chart {
    width: 100%;
    height:400px;
}
</style>
