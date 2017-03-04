/**
 * Created by sioxa on 2017/2/27 0027.
 */
import G2 from 'g2'
import colors from './colors.js'

let DEFAULT_COLOR = colors.DEFAULT;
let FONT_FAMILY = '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"';
let Theme = {
  defaultColor: DEFAULT_COLOR, // 默认主题色
  plotCfg: {
    margin: [20, 80, 60, 80]
  },
  facetCfg: {
    type: 'rect',
    margin: 10,
    facetTitle: {
      titleOffset: 16,
      colDimTitle: {
        title: {
          fontSize: 14,
          textAlign: 'center',
          fill: colors.LIGHT
        }
      },
      colTitle: {
        title: {
          fontSize: 12,
          textAlign: 'center',
          fill: colors.LIGHT
        }
      },
      rowTitle: {
        title: {
          fontSize: 12,
          textAlign: 'center',
          rotate: 90,
          fill: colors.LIGHT
        }
      },
      rowDimTitle: {
        title: {
          fontSize: 12,
          textAlign: 'center',
          rotate: 90,
          fill: colors.LIGHT
        }
      }
    }
  },
  binWidth: 0.03, // bin 统计的默认值
  fontFamily: FONT_FAMILY,
  colors: {
    'default': ['#4E7CCC', '#36B3C3', '#4ECDA5', '#94E08A', '#E2F194', '#EDCC72', '#F8AB60', '#F9815C', '#EB4456', '#C82B3D'],
    intervalStack: ['#4E7CCC', '#36B3C3', '#4ECDA5', '#94E08A', '#E2F194', '#EDCC72', '#F8AB60', '#F9815C', '#EB4456', '#C82B3D']
  },
  shapes: {
    point: ['hollowCircle', 'hollowSquare', 'hollowDiamond', 'hollowBowtie', 'hollowTriangle',
      'hollowHexagon', 'cross', 'tick', 'plus', 'hyphen', 'line'],
    line: ['line', 'dash', 'dot'],
    area: ['area']
  },
  hues: ['red', 'yellow', 'green', 'blue', 'orange', 'purple', 'pink', 'brown', 'white', 'gray', 'black'],
  axis: {
    top: {
      position: 'top',
      titleOffset: 30,
      title: {
        fontSize: 12,
        fill: colors.LIGHT
      },
      labels: {
        label: {
          fill: colors.LIGHT,
          fontSize: 12
        }
      },
      tickLine: {
        lineWidth: 1,
        stroke: colors.DEFAULT,
        value: 5
      }
    },
    bottom: {
      position: 'bottom',
      titleOffset: 45,
      labelOffset: 20,
      title: {
        fontSize: 12,
        textAlign: 'center',
        fill: colors.LIGHT
      },
      labels: {
        label: {
          fill: colors.LIGHT,
          fontSize: 12
        }
      },
      line: {
        lineWidth: 1,
        stroke: colors.DEFAULT
      },
      tickLine: {
        lineWidth: 1,
        stroke: colors.DEFAULT,
        value: 5
      }
    },
    left: {
      position: 'left',
      titleOffset: 60,
      labelOffset: 13,
      title: {
        fontSize: 12,
        fill: colors.LIGHT
      },
      labels: {
        label: {
          fill: colors.LIGHT
        }
      },
      line: {
        lineWidth: 1,
        stroke: colors.DEFAULT
      },
      tickLine: {
        lineWidth: 1,
        stroke: colors.DEFAULT,
        value: 5
      },
      grid: {
        line: {
          stroke: colors.DEFAULT,
          lineWidth: 1,
          lineDash: [2, 2]
        }
      }
    },
    right: {
      position: 'right',
      titleOffset: 60,
      labelOffset: 13,
      title: {
        fontSize: 12,
        fill: colors.LIGHT
      },
      labels: {
        label: {
          fill: colors.LIGHT
        }
      },
      line: {
        lineWidth: 1,
        stroke: colors.DEFAULT
      },
      tickLine: {
        lineWidth: 1,
        stroke: colors.DEFAULT,
        value: 5
      }
    },
    circle: {
      labelOffset: 5,
      line: {
        lineWidth: 1,
        stroke: colors.DEFAULT
      },
      grid: {
        line: {
          stroke: colors.DEFAULT,
          lineWidth: 1,
          lineDash: [1, 3]
        }
      },
      labels: {
        label: {
          fill: colors.LIGHT
        }
      }
    },
    gauge: {
      grid: null,
      labelOffset: 5,
      tickLine: {
        lineWidth: 1,
        value: -20,
        stroke: colors.DEFAULT
      },
      subTick: 5,
      labels: {
        label: {
          fill: colors.LIGHT
        }
      }
    },
    clock: {
      grid: null,
      labelOffset: 5,
      tickLine: {
        lineWidth: 1,
        value: -20,
        stroke: '#C0D0E0'
      },
      subTick: 5,
      labels: {
        label: {
          fill: colors.LIGHT
        }
      }
    },
    radius: {
      titleOffset: 45,
      labels: {
        label: {
          fill: colors.LIGHT
        }
      },
      line: {
        lineWidth: 1,
        stroke: colors.DEFAULT
      },
      grid: {
        line: {
          stroke: colors.DEFAULT,
          lineWidth: 1,
          lineDash: [2, 2]
        },
        type: 'circle'
      }
    },
    helix: {
      grid: null,
      labels: {
        label: null
      },
      line: {
        lineWidth: 1,
        stroke: colors.DEFAULT
      },
      tickLine: {
        lineWidth: 1,
        value: 5,
        stroke: colors.DEFAULT
      }
    }
  },
  labels: {
    offset: 14,
    label: {
      fill: colors.LIGHT,
      fontSize: 12
    }
  },
  treemapLabels: {
    offset: 10,
    label: {
      fill: '#fff',
      fontSize: 14,
      textBaseline: 'top',
      fontStyle: 'bold'
    }
  },
  innerLabels: {
    label: {
      fill: '#fff',
      fontSize: 12
    }
  }, // 在theta坐标系下的饼图文本内部的样式
  thetaLabels: {
    labelLine: {
      lineWidth: 1
    },
    labelHeight: 14,
    offset: 30
  }, // 在theta坐标系下的饼图文本的样式
  legend: {
    right: {
      position: 'right',
      back: null,
      spacingX: 10,
      spacingY: 12,
      markerAlign: 'center',
      wordSpaceing: 12,
      width: 20,
      height: 156,
      word:{
        fill:colors.LIGHT
      },
      title:{
        fill:colors.LIGHT
      }
    },
    left: {
      position: 'left',
      back: null,
      spacingX: 10,
      spacingY: 12,
      markerAlign: 'center',
      wordSpaceing: 12,
      width: 20,
      height: 156,
      word:{
        fill:colors.LIGHT
      }
    },
    top: {
      position: 'top',
      title: null,
      back: null,
      spacingX: 16,
      spacingY: 10,
      markerAlign: 'center',
      wordSpaceing: 12,
      width: 156,
      height: 20,
      word:{
        fill:colors.LIGHT
      }
    },
    bottom: {
      position: 'bottom',
      title: null,
      back: null,
      spacingX: 16,
      spacingY: 10,
      markerAlign: 'center',
      wordSpaceing: 12,
      width: 156,
      height: 20,
      word:{
        fill:colors.LIGHT
      }
    }
  },
  tooltip: {
    crosshairs: false,
    offset: 15,
    crossLine: {
      stroke: colors.LIGHT
    },
    wordSpaceing: 6,
    markerCfg: {
      symbol: 'circle',
      radius: 3
    }
  },
  activeShape: {
    point: {
      radius: 5,
      fillOpacity: 0.7
    },
    hollowPoint: {
      lineWidth: 2,
      radius: 4
    },
    interval: {
      fillOpacity: 0.7
    },
    hollowInterval: {
      lineWidth: 2
    },
    area: {
      fillOpacity: 0.85
    },
    hollowArea: {
      lineWidth: 2
    },
    line: {
      lineWidth: 2
    },
    polygon: {
      fillOpacity: 0.75
    }
  }, // 图形激活时，鼠标移动到上面
  shape: {
    point: {
      lineWidth: 1,
      fill: DEFAULT_COLOR,
      radius: 4
    },
    hollowPoint: {
      fill: '#fff',
      lineWidth: 1,
      stroke: DEFAULT_COLOR,
      radius: 3
    },
    interval: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.85
    },
    pie: {
      lineWidth: 1,
      stroke: '#fff'
    },
    hollowInterval: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    area: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.6
    },
    polygon: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 1
    },
    hollowPolygon: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    hollowArea: {
      fill: '#fff',
      stroke: DEFAULT_COLOR,
      fillOpacity: 0,
      lineWidth: 1
    },
    line: {
      stroke: DEFAULT_COLOR,
      lineWidth: 1,
      fill: null
    }
  },
  guide: {
    text: {
      fill: colors.LIGHT,
      fontSize: 12
    },
    line: {
      stroke: DEFAULT_COLOR,
      lineDash: [0, 2, 2]
    },
    rect: {
      lineWidth: 0,
      fill: DEFAULT_COLOR,
      fillOpacity: 0.1
    },
    tag: {
      line: {
        stroke: DEFAULT_COLOR,
        lineDash: [0, 2, 2]
      },
      text: {
        fill: colors.LIGHT,
        fontSize: 12,
        textAlign: 'center'
      },
      rect: {
        lineWidth: 0,
        fill: DEFAULT_COLOR,
        fillOpacity: 0.1
      }
    },
    html: {
      align: 'cc'
    }
  },
  tooltipMarker: {
    fill: '#fff',
    symbol: 'circle',
    lineWidth: 2,
    stroke: DEFAULT_COLOR,
    radius: 4
  } // 提示信息在折线图、区域图上形成点的样式
};
// let theme = G2.Util.mix(true, {}, G2.Theme, Theme);
G2.Global.setTheme(Theme); // 将主题设置为用户自定义的主题

export default G2
