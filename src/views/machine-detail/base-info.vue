<template>
  <div class="base-info">
      机床状态
  </div>
</template>

<script>
export default {
  name: 'BaseInfo',
  props:['plantid','machineid'],
  data () {
    return {
    }
  },
  mounted(){
      this.$api.getMachineDetail(this.plantid,this.machineid).then(response=>{
          console.log(response)
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
