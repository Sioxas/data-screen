export default {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis:
    {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis:
    {
        type: 'value'
    },
    series: [
        {
            name: '报警',
            type: 'line',
            stack: '总量',
            areaStyle:{normal:{}},
            data: [32, 33, 30, 33, 39, 33, 32]
        },

        {
            name: '关机',
            type: 'line',
            stack: '总量',
            areaStyle:{normal:{}},
            data: [15, 23, 20, 15, 19, 33, 41]
        },
        {
            name: '待机',
            type: 'line',
            stack: '总量',
            areaStyle:{normal:{}},
            data: [22, 18, 19, 23, 29, 33, 31]
        },
        {
            name: '正常',
            type: 'line',
            stack: '总量',
            areaStyle:{normal:{}},
            data: [120, 132, 101, 134, 90, 230, 210]
        }
    ],
    color: ['#61b6ff','#2f4554', '#61a0a8', '#d48265'].reverse()
}
