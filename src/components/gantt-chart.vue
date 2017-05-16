<template>
    <div id="gantt-chart">
    </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex'
import echarts from 'echarts'
import colors from '@/config/colors'
import {datetime_to_unix} from '@/utils/utils'
import '@/utils/date-format.js'

let option = {
    xAxis: {
        name: '持续时间',
        type: 'value',
        axisLine: {
            lineStyle: {
                color: colors.DEFAULT
            }
        },
        axisLabel: {
            interval: 0,
            textStyle: {
                color: colors.LIGHT
            }
        },
        splitLine: {
            lineStyle: {
                color: [colors.DEFAULT]
            }
        }
    },
    yAxis: {
        data: ['持续时间'],
        type: 'category',
        axisLine: {
            lineStyle: {
                color: colors.DEFAULT
            }
        },
        axisLabel: {
            textStyle: {
                color: colors.LIGHT
            }
        },
        splitLine: {
            lineStyle: {
                color: [colors.DEFAULT]
            }
        }
    },
    legend: {
        show: true,
        data: ['运行','待机','关机','报警'],
        top: 0
    },
    tooltip: {
        axisPointer: {
            type: 'shadow'
        },
        trigger: 'item'
    },
    series: []
}

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
            return '关机';
        case -2:
            return '报警';
        case 3:
            return '运行';
        default:
            return '待机';
    }
}

function insertData({ run, time, usedTime }) {
    option.series.push({
        data: [usedTime],
        name: state_style_name(run),
        stack: '总量',
        type: 'bar',
        itemStyle: {normal: {color:state_style_color(run)}}
    })
}

function formatterFactory(dateTime){
    return value => new Date(value+datetime_to_unix(dateTime)).Format("yyyy-MM-dd hh:mm:ss")
}

export default {
    name: 'ganttChart',
    computed: {
        ...mapState(['plantID', 'machineID'])
    },
    mounted() {
        let areaStackChart = echarts.init(document.getElementById('gantt-chart'))
        this.$api.getMachineHistoryStatusList(this.plantID, this.machineID, '2016/10/17 00:00:00', '2016/10/22 21:05:00').then(data => {
            option.xAxis.axisLabel['formatter'] = formatterFactory(data[0].time)
            data.forEach(item => insertData(item))
            areaStackChart.setOption(option)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#gantt-chart {
    height: 200px;
    width: 100%;
}
</style>
