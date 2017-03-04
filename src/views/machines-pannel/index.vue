<template>
  <ui-frame title="车间机床实时状态">
    <div class="machines-pannel">
      <div class="summary">
        <ul>
          <li style="color:#30ebef">
            <span class="state-text">运行</span>
            <span class="number">25</span>
          </li>
          <li style="color:#ef9d94">
            <span class="state-text">报警</span>
            <span class="number">3</span>
          </li>
          <li style="color:#d7f175">
            <span class="state-text">待机</span>
            <span class="number">10</span>
          </li>
          <li style="color:#c3cfe2">
            <span class="state-text">关机</span>
            <span class="number">8</span>
          </li>
        </ul>
      </div>
      <div class="blank"></div>
      <div class="machines-grid">
        <div class="machines-col machines-col-1">
          <ul>
            <li>
              <machine-instance state="on" mid="1"></machine-instance>
            </li>
            <li>
              <machine-instance state="off" mid="2"></machine-instance>
            </li>
            <li>
              <machine-instance state="alert" mid="3"></machine-instance>
            </li>
            <li>
              <machine-instance state="STANDBY" mid="4"></machine-instance>
            </li>
          </ul>
        </div>
        <div class="machines-col machines-col-2">
          <ul>
            <li>
              <machine-instance state="on" mid="1"></machine-instance>
              <machine-instance state="on" mid="1"></machine-instance>
              <machine-instance state="on" mid="1"></machine-instance>
            </li>
            <li>
              <machine-instance state="off" mid="2"></machine-instance>
              <machine-instance state="off" mid="2"></machine-instance>
              <machine-instance state="off" mid="2"></machine-instance>
            </li>
            <li>
              <machine-instance state="alert" mid="3"></machine-instance>
              <machine-instance state="alert" mid="3"></machine-instance>
              <machine-instance state="alert" mid="3"></machine-instance>
            </li>
            <li>
              <machine-instance state="STANDBY" mid="4"></machine-instance>
              <machine-instance state="STANDBY" mid="4"></machine-instance>
              <machine-instance state="STANDBY" mid="4"></machine-instance>
            </li>
            <li>
              <machine-instance state="on" mid="1"></machine-instance>
              <machine-instance state="on" mid="1"></machine-instance>
              <machine-instance state="on" mid="1"></machine-instance>
            </li>
          </ul>
        </div>
        <div class="machines-col machines-col-3">
          <ul>
            <li>
              <machine-instance state="on" mid="1"></machine-instance>
              <machine-instance state="on" mid="1"></machine-instance>
              <machine-instance state="on" mid="1"></machine-instance>
            </li>
            <li>
              <machine-instance state="off" mid="2"></machine-instance>
              <machine-instance state="off" mid="2"></machine-instance>
              <machine-instance state="off" mid="2"></machine-instance>
            </li>
            <li>
              <machine-instance state="alert" mid="3"></machine-instance>
              <machine-instance state="alert" mid="3"></machine-instance>
              <machine-instance state="alert" mid="3"></machine-instance>
            </li>
            <li>
              <machine-instance state="STANDBY" mid="4"></machine-instance>
              <machine-instance state="STANDBY" mid="4"></machine-instance>
              <machine-instance state="STANDBY" mid="4"></machine-instance>
            </li>
            <li>
              <machine-instance state="on" mid="1"></machine-instance>
              <machine-instance state="on" mid="1"></machine-instance>
              <machine-instance state="on" mid="1"></machine-instance>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </ui-frame>

</template>

<script type="text/ecmascript-6">
  import uiFrame from '../../components/ui-frame.vue'
  import machineInstance from './machine-instance.vue'
  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    },
    components: {uiFrame,machineInstance},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
  @import './../../style/colors';
.machines-pannel{
  display:flex;
  flex-direction:column;
  padding:5px;
  .summary{
    border:1px solid @LIGHT;
    border-radius: 10px;
    padding:10px;
    ul{
      list-style:none;
      display:flex;
      flex-direction:row;
      justify-content:space-around;
      li{
        .state-text{
          font-size:14px;
        }
        .number{
          font-size:20px;
        }
      }
    }
  }
  .machines-grid{
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    .machines-col{
      border:1px solid @LIGHT;
      border-radius: 10px;
      padding:10px;
      ul{
        list-style:none;
        li{
          display:flex;
          flex-direction:row;
          justify-content:space-around;
        }
      }
    }
    .machines-col-1{

    }
    .machines-col-2{

    }
    .machines-col-3{

    }
  }
  .blank{
    height: 20px;
  }
}
</style>
