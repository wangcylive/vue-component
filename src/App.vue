<template>
    <div>
        <view-index></view-index>
        <div :class="$style.b">Ha Ha...</div>
    </div>
</template>

<script>
  import ViewIndex from './view/index.vue'

  export default {
    name: "App",
    components: {
      ViewIndex
    },
    created () {
      console.log(this.$style)
    }
  }
</script>

<style lang='scss'>
    @import "scss/layout.scss";
</style>

<style module>
    .b {
        color: #ff00ff;
    }
</style>