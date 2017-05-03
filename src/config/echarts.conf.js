import colors from './colors'

const _option = {
    title: { show: false },
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
    color: [colors.LIGHT]
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

export function mixOption(option) {
    return deepMerge(option, _option)
}
