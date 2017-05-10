<template>
    <div class="base-info">
        <div class="loading" v-if="loading">
            <img v-if="!error" src="./../../assets/loading.gif" alt="正在加载">
            <h2 class="loading-error" v-if="error">加载失败</h2>
        </div>
        <div class="pannel-row" v-if="!loading">
            <div class="machine-state">
                <div class="state-ball" :class="[stateStyleName]"></div>
                <div class="state-text">
                    <h3>{{stateName}}</h3>
                </div>
            </div>
            <div class="machine-time">
                正常运行
                <span class="bigint">{{runTime.days}}</span> 天
                <span class="bigint">{{runTime.hours | fix}}</span> 小时
                <span class="bigint">{{runTime.minutes | fix}}</span> 分
                <span class="bigint">{{runTime.seconds | fix}}</span> 秒
            </div>
            <div class="machine-time">
                开机时间：{{machineStart}}
            </div>
        </div>
        <div class="pannel-row" v-if="!loading">
            <div class="param-group">
                <ul class="param-key">
                    <li>机床型号</li>
                    <li>累计加工数量</li>
                    <li>操作方式</li>
                </ul>
                <ul class="param-value">
                    <li>{{type}}</li>
                    <li>{{num}}</li>
                    <li>{{operationMethod}}</li>
                </ul>
            </div>
            <div class="param-group">
                <ul class="param-key">
                    <li>机床类型</li>
                    <li>程序号</li>
                    <li>负载</li>
                </ul>
                <ul class="param-value">
                    <li>{{machineCustomType}}</li>
                    <li>{{processNo}}</li>
                    <li>{{loadMain}}</li>
                </ul>
            </div>
            <div class="param-group">
                <ul class="param-key">
                    <li>机床IP</li>
                    <li>轮型</li>
                    <li>进给倍率</li>
                </ul>
                <ul class="param-value">
                    <li>{{macIP}}</li>
                    <li>{{wheelType}}</li>
                    <li>{{feedRate}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { datetime_to_unix } from './../../utils/utils.js'
import './../../utils/date-format.js'
export default {
    name: 'BaseInfo',
    data() {
        return {
            loading: true,
            error: false,
            machineState: null,
            machineStart: null,
            type: null,
            machineCustomType: null,
            macIP: null,
            num: null,
            processNo: null,
            wheelType: null,
            operationMethod: null,
            loadMain: null,
            feedRate: null,
            runTime: {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }
    },
    computed: {
        ...mapState(['plantID', 'machineID']),
        stateStyleName() {
            switch (this.machineState) {
                case -1:
                    return 'off';
                case 'a':
                    return 'alarm';
                case 3:
                    return 'on';
                default:
                    return 'standby';
            }
        },
        stateName() {
            switch (this.machineState) {
                case -1:
                    return '关机';
                case 'a':
                    return '报警';
                case 3:
                    return '运行';
                default:
                    return '待机';
            }
        }
    },
    mounted() {
        this.$api.getMachineDetail(this.plantID, this.machineID).then(data => {
                this.machineState = data.machine_state    //机床状态
                this.machineStart = data.machine_start    //开机时间
                this.type = data.type             //机床型号
                this.machineCustomType = data.MachineCustomType//机床类型
                this.macIP = data.mac_ip           //机床IP
                this.num = data.num              //累计加工数量
                this.processNo = data.main_pro         //程序号
                this.wheelType = data.wheel_type       //轮型
                this.operationMethod = data.method           //操作方式
                this.loadMain = data.load_main        //负载
                this.feedRate = data.power_jingei     //进给倍率

                setInterval(() => {
                    let startTime = datetime_to_unix(this.machineStart)
                    let now = datetime_to_unix((new Date).Format('yyyy-MM-dd hh:mm:ss'))
                    let da = now - startTime
                    //计算相差天数
                    let days = Math.floor(da / (24 * 3600))
                    let leave1 = da % (24 * 3600)//计算天数后剩余的毫秒数
                    let hours = Math.floor(leave1 / (3600))
                    //计算相差分钟数
                    let leave2 = leave1 % 3600//计算小时数后剩余的毫秒数
                    let minutes = Math.floor(leave2 / 60)
                    //计算相差秒数
                    let leave3 = leave2 % 60     //计算分钟数后剩余的毫秒数
                    let seconds = Math.round(leave3)
                    this.runTime = { days, hours, minutes, seconds }
                }, 1000)
                this.loading = false
        }).catch(e => {
            this.error = true
            console.error(e)
        })
    },
    filters: {
        fix(num) {
            return num < 10 ? '0' + num : num
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './../../style/colors.less';
.base-info {
    display: flex;
    flex-direction: column;
    .loading {
        height: 210px;
        text-align: center;
        line-height: 210px;
    }
    .pannel-row {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 10px;
        .bigint {
            font-size: 25px;
            font-weight: bold;
            text-shadow: 0 0 20px @DEFAULT;
        }
    }
    .machine-state {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 50px;
        .state-ball {
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
        .state-text {
            padding: 0 5px;
        }
    }
    .machine-time {
        height: 50px;
        line-height: 50px;
    }
    .param-group {
        display: flex;
        flex-direction: row;
        ul {
            list-style: none;
            li {
                padding: 5px;
                line-height: 30px;
            }
        }
        .param-key {
            text-align: right;
        }
        .param-value {
            li {
                font-size: 23px;
                font-weight: bold;
                text-shadow: 0 0 20px @DEFAULT;
            }
        }
    }
}
</style>
