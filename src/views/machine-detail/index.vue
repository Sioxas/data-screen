<template>
  <div class="machine-detail">
    <div class="container">
      <div class="x-button" @click="closeMachineDetail">关闭</div>
      <ui-frame>
        <div class="content">
        {{plantID}}车间{{machineID}}号机床
        </div>
      </ui-frame>
    </div>
  </div>
</template>

<script>
import uiFrame from './../../components/ui-frame.vue'
import types from './../../store/types.js'
import {mapState} from 'vuex'
export default {
  name: 'machineDetail',
  components: { uiFrame },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed:{
    ...mapState(['plantID','machineID'])
  },
  methods:{
    closeMachineDetail(){
      console.log('close')
      this.$store.commit(types.CLOSE_MACHINE_DETAIL_PANNEL)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "./../../style/colors.less";
.machine-detail {
  position: fixed;
  margin: auto;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  .container{
    margin:0 auto;
    width:100%;
    max-width:1024px;
    .x-button{
      color:#fff;
      cursor:pointer;
    }
    .content{
      color:#fff;
    }
  }
}
</style>
