<template>
    <div id="spindle-speed">

    </div>
</template>
<script>
import {mapState} from 'vuex'
import echarts from 'echarts'
import { mixOption } from '@/config/echarts.conf'
import spindleSpeedOption from '@/mock/spindle-speed'
export default {
    name: 'spindleSpeed',
    computed:{
        ...mapState(['plantID', 'machineID'])
    },
    mounted() {
        let spindleSpeedChart = echarts.init(document.getElementById('spindle-speed'))
        this.$api.getSpindleSpeedList(this.plantID,this.machineID,'2016/10/17 00:00:00','2016/10/17 21:05:00').then(data =>{
            spindleSpeedChart.setOption((spindleSpeedOption(data)))
        })
    }
}
</script>
<style>
#spindle-speed {
    width: 100%;
    height: 400px;
}
</style>


