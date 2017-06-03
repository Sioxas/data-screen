<template>
    <div class="machine-instance-wrapper">
        <div class="machine-instance" :class="[state_style_name]" @click="openMachineDetail(mid)">
            <span>{{mid}}</span>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
import types from './../../store/types.js'
export default {
    props: ['state', 'mid'],
    methods: {
        openMachineDetail(machineID) {
            this.$router.push('detail')
            this.$store.commit(types.OPEN_MACHINE_DETAIL_PANNEL, machineID)
        }
    },
    computed: {
        state_style_name() {
            switch (this.state) {
                case -1:
                    return 'off';
                case '-1':
                    return 'off';
                case 'a':
                    return 'alarm';
                case 3:
                    return 'on';
                case '3':
                    return 'on';
                default:
                    return 'standby';
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
@import './../../style/colors';

.machine-instance-wrapper {
    width: 50px;
    height: 50px;
    padding: 5px;
    .machine-instance {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all .2s;
    }
}
</style>
