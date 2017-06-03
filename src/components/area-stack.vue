<template>
    <div class="area-stack">
        <ui-frame title="一周机床状态统计">
            <div id="area-stack"></div>
        </ui-frame>
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts'
import uiFrame from './ui-frame'
import { mixOption } from './../config/echarts.conf'
import areaStackOption from './../mock/area_stack'

export default {
    components: { uiFrame },
    mounted() {
        let areaStackChart = echarts.init(document.getElementById('area-stack'))
        areaStackChart.setOption(mixOption(areaStackOption))
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#area-stack {
    height: 200px;
}
</style>
