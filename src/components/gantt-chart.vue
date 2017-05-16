<template>
    <div class="summary">
        <div id="gantt-chart">
        </div>
        <div id="summary-graph">

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import echarts from 'echarts'

import { datetime_to_unix } from '@/utils/utils'
import colors from '@/config/colors'
import summaryGraphOption from '@/mock/summary_graph'
import _ganttChartOption from '@/mock/gantt_chart'
import '@/utils/date-format.js'

let ganttChartOption

function state_style_color(state) {
    switch (state) {
        case -1:
            return colors.machine_state.OFF
        case -2:
            return colors.machine_state.ALARM
        case 3:
            return colors.machine_state.ON
        default:
            return colors.machine_state.STANDBY
    }
}

function state_style_name(state) {
    switch (state) {
        case -1:
            return '关机'
        case -2:
            return '报警'
        case 3:
            return '运行'
        default:
            return '待机'
    }
}

function insertData({ run, time, usedTime }) {
    ganttChartOption.series.push({
        data: [usedTime],
        name: state_style_name(run),
        stack: '总量',
        type: 'bar',
        itemStyle: { normal: { color: state_style_color(run) } }
    })
}

function formatterFactory(dateTime) {
    return value => new Date((value + datetime_to_unix(dateTime)) * 1000).Format("yyyy-MM-dd hh:mm:ss")
}

let runTimeAll = 0
let offTimeAll = 0
let standbyTimeAll = 0
let alarmTimeAll = 0

function countStatus({ run, usedTime }) {
    switch (run) {
        case -1:
            offTimeAll += usedTime
            break
        case -2:
            alarmTimeAll += usedTime
            break
        case 3:
            runTimeAll += usedTime
            break
        default:
            standbyTimeAll += usedTime
    }
}

export default {
    name: 'ganttChart',
    computed: {
        ...mapState(['plantID', 'machineID'])
    },
    mounted() {
        runTimeAll = 0
        offTimeAll = 0
        standbyTimeAll = 0
        alarmTimeAll = 0
        let ganttChart = echarts.init(document.getElementById('gantt-chart'))
        let summaryGraph = echarts.init(document.getElementById('summary-graph'))
        ganttChartOption = JSON.parse(JSON.stringify(_ganttChartOption))
        this.$api.getMachineHistoryStatusList(this.plantID, this.machineID, '2016/10/17 00:00:00', '2016/10/18 21:05:00').then(data => {
            ganttChartOption.xAxis.axisLabel['formatter'] = formatterFactory(data[0].time)
            data.forEach(item => {
                insertData(item)
                countStatus(item)
            })
            summaryGraphOption.series.data = [
                { value: runTimeAll, name: '运行', itemStyle: { normal: { color: colors.machine_state.ON } } },
                { value: offTimeAll, name: '关机', itemStyle: { normal: { color: colors.machine_state.OFF } } },
                { value: standbyTimeAll, name: '待机', itemStyle: { normal: { color: colors.machine_state.STANDBY } } },
                { value: alarmTimeAll, name: '报警', itemStyle: { normal: { color: colors.machine_state.ALARM } } }
            ]
            summaryGraph.setOption(summaryGraphOption)
            ganttChart.setOption(ganttChartOption)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.summary {
    width: 100%;
}

#gantt-chart {
    height: 200px;
    width: 100%;
}

#summary-graph {
    height: 350px;
    width: 100%;
}
</style>
