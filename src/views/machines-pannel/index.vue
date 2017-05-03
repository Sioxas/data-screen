<template>
    <ui-frame title="车间机床实时状态">
        <div class="machines-pannel">
            <div class="summary">
                <ul>
                    <li :style="{color:color.ON}">
                        <span class="state-text">运行</span>
                        <span class="number">{{count.on}}</span>
                    </li>

                    <li :style="{color:color.STANDBY}">
                        <span class="state-text">待机</span>
                        <span class="number">{{count.standby}}</span>
                    </li>
                    <li :style="{color:color.OFF}">
                        <span class="state-text">关机</span>
                        <span class="number">{{count.off}}</span>
                    </li>
                    <li :style="{color:color.ALARM}">
                        <span class="state-text">报警</span>
                        <span class="number">{{count.alarm}}</span>
                    </li>
                </ul>
            </div>
            <div class="blank"></div>
            <div class="machines-grid">
                <div class="machines-col machines-col-1" v-for="area in machineAreas">
                    <ul>
                        <li v-for="row in machineRows(area)">
                            <machine-instance :state="item.state" :mid="item.id" v-for="item in row" :key="item.id">
                            </machine-instance>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </ui-frame>
</template>

<script type="text/ecmascript-6">

import uiFrame from '../../components/ui-frame.vue'
import machineInstance from './machine-instance.vue'
import machinePosition from '../../config/machine_position'
import groupBy from 'lodash/groupBy'
import find from 'lodash/find'
import forEach from 'lodash/forEach'

import colors from '../../config/colors'

export default {
    data() {
        return {
            machinePosition: machinePosition.filter(a => a.plant === 1),
            color: colors.machine_state
        }
    },
    components: { uiFrame, machineInstance },
    methods: {
        machineRows(area) {
            return groupBy(area, a => a.row)
        }
    },
    computed: {
        machineAreas() {
            return groupBy(this.machinePosition, a => a.area)
        },
        count() {
            let res = {
                on: 0,
                off: 0,
                alarm: 0,
                standby: 0
            }
            forEach(this.machinePosition, i => {
                switch (i.state) {
                    case -1:
                        res.off++
                        break;
                    case 'a':
                        res.alarm++
                        break;
                    case 3:
                        res.on++
                        break;
                    default:
                        res.standby++
                        break;
                }
            })
            return res
        }
    },
    mounted() {
        let that = this
        this.$api.getPlantStatus(1).then(data => {
            let machineState = data
            that.machinePosition = machineState.map(item => {
                return {
                    ...find(that.machinePosition, chr => chr.id === item.MachineID),
                    state: item.run
                }
            })
        }).catch(e=>{
            console.error(e)
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
@import './../../style/colors';

.machines-pannel {
    display: flex;
    flex-direction: column;
    padding: 5px;
    .summary {
        border: 1px solid @DEFAULT;
        border-radius: 10px;
        padding: 10px;
        ul {
            list-style: none;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            li {
                text-shadow: 0 0 20px @DEFAULT;
                .state-text {
                    font-size: 14px;
                }
                .number {
                    font-size: 20px;
                }
            }
        }
    }
    .machines-grid {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .machines-col {
            border: 1px solid @DEFAULT;
            border-radius: 10px;
            padding: 10px;
            ul {
                list-style: none;
                li {
                    display: flex;
                    flex-direction: row;
                }
            }
        }
    }
    .blank {
        height: 20px;
    }
}
</style>
