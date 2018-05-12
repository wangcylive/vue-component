<template>
  <div>
    <h3>This is about page.</h3>
    <button class="btn" @click="onClick">Click</button>
  </div>
</template>

<script>
  // const prefetch = import(/* webpackPrefetch: true */ 'view/prefetch')
  export default {
    name: 'AboutIndex',
    data() {
      return {}
    },
    methods: {
      onClick () {
        import(/* webpackPrefetch: true */ 'view/prefetch').then(({ default: math }) => {
          console.log(math())
        })
      }
    }
  }
</script>

<style lang='scss'>

</style>
