<template>
  <div class="ui-frame">
    <div class="title" v-if="title">
      <span>{{title}}</span>
    </div>
    <div class="bg">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['title'],
  data() {
    return {
    }
  },
  components: {},
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less" rel="stylesheet/less">
@import "./../style/colors";
.ui-frame {
  padding: 2px;
  position: relative;
  .title {
    padding: 2px 0;
    span {
      background: @DEFAULT;
      padding: 2px;
    }
  }
  .bg {
    display: flex;
    flex-direction: column;
    border: 35px solid rgba(255, 255, 255, 0);
    border-image: url("./../assets/border-bg.png") 35 fill;
  }
}
</style>
