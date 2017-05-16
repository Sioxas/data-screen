import colors from '@/config/colors'
export default function (data) {
    return {
        color:[colors.LIGHT],
        title: {
            text: '主轴转速记录'
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            data: data.map(item => item.time),
            axisLine: {
                lineStyle: {
                    color: colors.DEFAULT
                }
            }
        },
        yAxis: {
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: colors.DEFAULT
                }
            }
        },
        toolbox: {
            left: 'center',
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        dataZoom: [{
            startValue: data[0].time
        }, {
            type: 'inside',
            textStyle:{
                color:colors.LIGHT
            },
            dataBackground:{
                lineStyle:{
                    color:colors.LIGHT
                },
                areaStyle:{
                    color:colors.DEFAULT
                }
            }
        }],
        series: {
            name: 'SPEED',
            type: 'line',
            data: data.map(item => item.acts_data)
        }
    }
}
