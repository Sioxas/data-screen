<template>
    <div class="machine-history">
        <div class="container">
            <div class="x-button" @click="closeMachineDetail">
                <router-link to="/">
                    <img src="./../../assets/close.svg" alt="关闭">
                </router-link>
            </div>
            <ui-frame>
                <div class="machine-history-header">
                    <h2>{{plantID}}车间{{machineID}}号机床历史数据</h2>
                    <div class="switch-button">
                        <router-link to="/detail">查看机床实时数据</router-link>
                    </div>
                </div>
                <div class="machine-history-content">
                    <div class="tab-linker">
                        <router-link to="/history/status" class="inactive">工作状态统计</router-link>
                        <router-link to="/history/spindle" class="inactive">主轴转速记录</router-link>
                        <router-link to="/history/product" class="inactive">产品加工记录表</router-link>
                        <div class="inactive"></div>
                    </div>
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </div>
            </ui-frame>
        </div>
    </div>
</template>

<script>
import uiFrame from './../../components/ui-frame.vue'
import types from './../../store/types.js'
import { mapState } from 'vuex'
export default {
    name: 'machineHistory',
    components: { uiFrame },
    computed: {
        ...mapState(['plantID', 'machineID'])
    },
    methods: {
        closeMachineDetail() {
            this.$store.commit(types.CLOSE_MACHINE_DETAIL_PANNEL)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "./../../style/colors.less";
.machine-history {
    position: fixed;
    margin: auto;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    .container {
        margin: 0 auto;
        width: 100%;
        max-width: 1024px;
        position: relative;
        .x-button {
            color: #fff;
            cursor: pointer;
            position: absolute;
            left: 100%;
            img {
                width: 50px;
                height: 50px;
            }
        }
        .machine-history-header {
            position: relative;
            h2 {
                color: #fff;
                height: 40px;
                line-height: 40px;
                text-align: center;
            }
            .switch-button {
                top:5px;
                right:0;
                position:absolute;
                color: #fff;
                border: 1px solid @DEFAULT;
                padding: 5px;
                font-size: 14px;
                a {
                    &:link,
                    &:visited,
                    &:hover {
                        text-decoration: none;
                        color: #fff;
                    }
                }
            }
        }
        .machine-history-content {
            color: #fff;
            .tab-linker {
                display: flex;
                flex-direction: row;
                height: 50px;
                line-height: 50px;
                .inactive {
                    text-decoration: none;
                    border: 1px solid rgba(0, 0, 0, 0);
                    border-bottom: 1px solid @DEFAULT;
                    padding: 0 10px;
                    &:last-child {
                        flex-grow: 1;
                    }
                }
                .router-link-active {
                    border: 1px solid @DEFAULT;
                    border-bottom: 1px solid rgba(0, 0, 0, 0);
                }
                a {
                    &:link,
                    &:visited,
                    &:hover {
                        text-decoration: none;
                        color: #fff;
                    }
                }
            }
        }
    }
}
</style>
