<template>
    <div class="alarm-info">
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>报警信息类型</th>
                    <th>报警时间</th>
                    <th>报警信息内容</th>
                    <th>机床报警信息</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in warnData">
                    <td>{{item.num}}</td>
                    <td>{{item.alarmType}}</td>
                    <td>{{item.alarmTime}}</td>
                    <td>{{item.alarmMsg}}</td>
                    <td>{{item.lastAlarmMessage}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'AlarmInfo',
    data() {
        return {
            error: false,
            loading: true,
            warnData:null
        }
    },
    computed: {
        ...mapState(['plantID', 'machineID'])
    },
    mounted() {
        this.$api.getMachineWarn(this.plantID, this.machineID).then(data => {
            let t=[]
            Object.keys(data).forEach(key=>{
                for(let i=0;i<data[key].length;++i){
                    t[i]={[key]:data[key][i],...t[i]}
                }
            })
            this.warnData=t
        }).catch(e => {
            this.error = true
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import './../../style/colors.less';
.alarm-info {
    table,
    th,
    td {
        border: 1px solid @DEFAULT;
    }
    table {
        width: 100%;
        margin-top: 5px;
        border-collapse: collapse;
        th,td{
            padding:5px;
        }
    }
}
</style>
