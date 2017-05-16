<template>
    <div class="work-status">
        <div class="loading" v-if="loading">
            <img v-if="!error" src="./../../assets/loading.gif" alt="正在加载">
            <h2 class="loading-error" v-if="error">加载失败</h2>
        </div>
        <div class="pannel-row" v-if="!loading">
            <div class="param-group">
                <ul class="param-key">
                    <li>机床型号</li>
                    <li>工作效率</li>
                </ul>
                <ul class="param-value">
                    <li>{{type}}</li>
                    <li>35.05 %</li>
                </ul>
            </div>
            <div class="param-group">
                <ul class="param-key">
                    <li>机床IP</li>
                    <li>通电时间</li>
                </ul>
                <ul class="param-value">
                    <li>{{ip}}</li>
                    <li>95.20 H</li>
                </ul>
            </div>
            <div class="param-group">
                <ul class="param-key">
                    <li>加工总件数</li>
                    <li>加工时间</li>
                </ul>
                <ul class="param-value">
                    <li>{{sum}} 件</li>
                    <li>63.97 H</li>
                </ul>
            </div>
        </div>
        <div class="pannel-row">
            <gantt-chart/>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import ganttChart from '@/components/gantt-chart'

export default {
    name:'workStatus',
    components:{ganttChart},
    data(){
        return{
            error:false,
            loading:true,
            ip:null,
            type:null,
            sum:null
        }
    },
    computed:{
        ...mapState(['plantID', 'machineID'])
    },
    mounted(){
        this.$api.getMachineHistoryStatus(this.plantID,this.machineID,'2016/10/17 00:00:00','2016/10/22 21:05:00').then(data => {
            this.ip=data.mac_ip
            this.type=data.mac_type
            this.sum=data.sum

            this.loading=false
        }).catch(e=>{
            this.error=true
        })
    }
}
</script>

<style scoped lang="less">
@import './../../style/colors.less';
.work-status {
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
