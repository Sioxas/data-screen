import {formatSeconds} from '@/utils/utils'
export default {
    tooltip: {
        trigger: 'item',
        formatter: params => params.name+'('+params.percent + '%)<br>' + params.seriesName + ':' + formatSeconds(params.value)
    },
    grid:{
        show:false
    },
    xAxis:{
        show:false
    },
    yAxis:{
        show:false
    },
    series:
        {
            name: '持续时间',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: 53822, name: '运行' },
                { value: 55034, name: '关机' },
                { value: 53212, name: '待机' },
                { value: 151, name: '报警' }
            ],
            roseType: 'angle',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
}
