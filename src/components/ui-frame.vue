<template>
    <div class="ui-frame">
      <div class="title"><span>{{title}}</span></div>
        <div class="ui-border">
          <slot></slot>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:['title'],
        data () {
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
    .ui-frame{
      padding:2px;
      .title{
        padding:2px 0;
        span{
          background:#2cb6ba;
          padding:2px;
        }
      }
      .ui-border{
        /*border:1px solid #2cb6ba;*/
        /*box-shadow:0 0 5px 2px #2cb6ba inset;*/
        padding:5px;
        /*background: rgba(34, 120, 124, 0.2);*/
        border-radius:10px;
        background-image: linear-gradient(135deg, rgba(44, 182, 186, 0.5) 0%, rgba(34, 120, 124, 0.5) 100%);
      }
    }
</style>
