<template>
    <div class="nightingale-rose-chart">

        <div id="nightingale-rose-chart"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import echarts from 'echarts'
import { mixOption } from './../config/echarts.conf'
import nightingaleRoseOption from './../mock/nightingale_rose'
import { mapState } from 'vuex'

let nightingaleRoseChart
export default {
    computed: {
        ...mapState(['count'])
    },
    mounted() {
        nightingaleRoseChart = echarts.init(document.getElementById('nightingale-rose-chart'))
        nightingaleRoseChart.setOption(mixOption(nightingaleRoseOption(this.$store.state.count)))
    },
    watch: {
        count(val) {
            nightingaleRoseChart.setOption(mixOption(nightingaleRoseOption(val)))
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#nightingale-rose-chart {
    width: 380px;
    height: 380px;
}
</style>
