<template>
    <div class="th-dashboard">
        <div class="dashboard-wraper">
            <div class="temperature" id="temperature-dashboard">
                {{temperature}}
            </div>
            <div class="humidity" id="humidity-dashboard">
                {{humidity}}
            </div>
        </div>
        <p v-if="loading">正在等待数据...</p>
        <p v-else>更新时间：{{time}}</p>
    </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts-liquidfill'


import temperatureDashboardOption from '@/mock/temperature_dashboard'
import '@/utils/date-format.js'
//import '@/utils/echarts-liquidfill.js'

let temperatureDashboard
let humidityDashboard
function humidityDashboardOption(h) {
    return {
        series: [{
            type: 'liquidFill',
            data: [h / 100, 0.30, 0.15, 0.10],
            radius: '19%'
        }]
    }
}

function parseData(data) {
    return Number.parseInt(data.match(/\d{2}/g).map(val => String.fromCharCode(parseInt(val, 16))).join(''))
        .toString(16).match(/\S{2}00/g).map(val => Number.parseInt(val.slice(0, 2), 16))
}

function connectSocket(that) {
    let wsUri = 'wss://loraflow.io/v1/application/ws?appeui=526973696e674849&token=1v7ui16502a0a2b72ba7ded716c76&order=desc'
    let websocket = new WebSocket(wsUri)
    websocket.onopen = (evt) => {
        console.log('socket已连接')
    }
    websocket.onclose = (evt) => {
        console.log('socket已关闭')
    }
    websocket.onmessage = (evt) => {
        let data = JSON.parse(evt.data)
        data = JSON.parse(data.payload)
        let ht = parseData(data.data)
        that.humidity = ht[0]
        that.temperature = ht[1]
        that.time = new Date(data.$time).Format('hh:mm:ss')
    }
    websocket.onerror = (evt) => {
        console.error(evt)
    }
}

export default {
    data() {
        return {
            temperature: 0,
            humidity: 0,
            time: null,
            loading: false
        }
    },
    mounted() {
        connectSocket(this)
        temperatureDashboard = echarts.init(document.getElementById('temperature-dashboard'))
        humidityDashboard = echarts.init(document.getElementById('humidity-dashboard'))
        //temperatureDashboard.setOption(temperatureDashboardOption(44))
        humidityDashboard.setOption(humidityDashboardOption(11))
    },
    watch:{
        // temperature(val){
        //     temperatureDashboard.setOption(temperatureDashboardOption(val))
        // },
        // humidity(val){
        //     humidityDashboard.setOption(humidityDashboardOption(val))
        // }
    }
}
</script>

<style lang="less">
@import './../style/colors.less';
.th-dashboard {
    height: 380px;
    h2 {
        color: #eee;
        text-shadow: 0 0 20px @DEFAULT;
    }
    p {
        color: darkgray;
    }
    .dashboard-wraper {
        display: flex;
        flex-direction: row;
        height: 350px;
    }
}
</style>


