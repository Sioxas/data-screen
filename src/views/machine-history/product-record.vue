<template>
    <div class="product-record">
        <table>
            <thead>
                <tr>
                    <th>编号</th>
                    <th>轮型</th>
                    <th>程序号</th>
                    <th>开始时间</th>
                    <th>结束时间</th>
                    <th>加工工时（分）</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in list">
                    <td>{{item.num}}</td>
                    <td>{{item.wheel_type}}</td>
                    <td>{{item.program_num}}</td>
                    <td>{{item.start_time}}</td>
                    <td>{{item.end_time}}</td>
                    <td>{{item.working_time}}</td>
                </tr>
            </tbody>
        </table>
        <pagination :size="7" :total="pageNumber" @page-change="pageChangeHandler"></pagination>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import pagination from '@/components/pagination'
export default {
    name: 'productRecord',
    components: { pagination },
    data() {
        return {
            currentPage: 1,
            error: false,
            loading: true,
            list: null,
            pageNumber:1
        }
    },
    computed: {
        ...mapState(['plantID', 'machineID'])
    },
    methods: {
        pageChangeHandler(pageNo) {
            this.$api.getHistoryDataProcess(this.plantID, this.machineID, '2016/10/17 00:00:00', '2016/10/17 21:05:00', pageNo).then(data => {
                this.list = data.map(item => {
                    let t=new Date(item.end_time)-new Date(item.start_time)
                    t=(t/1000/60).toFixed(1)
                    return {...item,working_time:t}
                })
            })
        }
    },
    mounted() {
        this.$api.getHistoryDataProcessNum(this.plantID, this.machineID, '2016/10/17 00:00:00', '2016/10/17 21:05:00').then(data => {
            this.pageNumber = Math.ceil(parseInt(data.data) / 10)
        })
        this.pageChangeHandler(1)
    }
}
</script>

<style scoped lang="less">
@import './../../style/colors.less';
.product-record {
    display: flex;
    flex-direction: column;
    align-items: center;
    table,
    th,
    td {
        border: 1px solid @DEFAULT;
    }
    table {
        width: 100%;
        margin-top: 5px;
        margin-bottom:10px;
        border-collapse: collapse;
        th,
        td {
            padding: 5px;
        }
    }
}
</style>


