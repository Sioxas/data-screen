export default ({alarm,off,on,standby})=>({
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
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
    visualMap: {
        show: false,
        min: 0,
        max: 50,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series:[
        {
            name: '机床状态',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                { value: on, name: '运行' },
                { value: off, name: '关机' },
                { value: standby, name: '待机' },
                { value: alarm, name: '报警' }
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
]
})
