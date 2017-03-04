<template>
  <div class="machine-instance-wrapper">
    <div class="machine-instance" :class="[state_style_name]">
      <span>{{mid}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import colors from './../../config/colors'
  export default {
    props: ['state', 'mid'],
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {},
    methods: {},
    computed: {
      state_style_name(){
        return this.state.toLowerCase()
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
    .on {
      border: 1px solid @ON+#353535;
      background: @ON;
      &:hover {
        box-shadow: 0 0 5px 2px @ON;
      }
      span {
        color: @ON+#353535;
      }
    }
    .off {
      border: 1px solid @OFF+#353535;
      background: @OFF;
      &:hover {
        box-shadow: 0 0 5px 2px @OFF;
      }
      span {
        color: @OFF+#353535;
      }
    }
    .alert {
      border: 1px solid @ALARM+#353535;
      background: @ALARM;
      &:hover {
        box-shadow: 0 0 5px 2px @ALARM;
      }
      span {
        color: @ALARM+#353535;
      }
    }
    .standby {
      border: 1px solid @STANDBY+#353535;
      background: @STANDBY;
      &:hover {
        box-shadow: 0 0 5px 2px @STANDBY;
      }
      span {
        color: @STANDBY+#353535;
      }
    }
  }
</style>
