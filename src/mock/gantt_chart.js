import colors from '@/config/colors'
import {formatSeconds} from '@/utils/utils'

export default  {
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
        data: ['运行', '待机', '关机', '报警'],
        top: 0
    },
    tooltip: {
        axisPointer: {
            type: 'shadow'
        },
        trigger: 'item',
        formatter: params => params.seriesName + '<br>' + params.name + ':' + formatSeconds(params.data)
    },
    series: []
}
