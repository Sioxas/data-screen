import colors from './colors'

/**自定义全局默认样式 */
const _option = {
    title: { show: false },
    legend:{
        textStyle:{
            color:colors.LIGHT
        }
    },
    xAxis: {
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
    grid: {
        show: true,
        top: 5,
        bottom: 30,
        borderColor: colors.DEFAULT
    },
    color: [colors.LIGHT,'#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
}

/**
 * 深度合并对象
 *
 * @param {Object} target 目标对象
 * @param {Object} source 源对象
 * @returns {Object} 目标对象
 */
function deepMerge(target, source) {
    Object.keys(source).forEach(key => {
        target[key] = target[key] && typeof target[key] === 'object' ? deepMerge(target[key], source[key]) : source[key]
    })
    return target
}

/**
 * 合并Option
 *
 * @export
 * @param {Object} option
 * @returns {Object} Option
 */
export function mixOption(option) {
    let t = JSON.parse(JSON.stringify(_option)) //深拷贝
    return deepMerge(t, option)
}
