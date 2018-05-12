<template>
    <div>
        <h2 :class="$style.title">This is test page.</h2>
    </div>
</template>

<script>
  export default {
    name: "PageIndex",
    data() {
      return {}
    },
    created () {
      console.log(this.$style)
    }
  }
</script>

<style module>
    .title {
        font-size: 1rem;
    }
</style>