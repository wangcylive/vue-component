<template>
  <div :class="className"></div>
</template>

<script>
export default {
  name: 'UiLoading',
  props: {
    white: {}
  },
  computed: {
    className () {
      return {
        [this.$style.loading]: true,
        [this.$style.white]: this.white !== undefined
      }
    }
  }
}
</script>

<style lang='scss' module>
  .loading {
    display: inline-block;
    width: 32px;
    height: 32px;
    background: url(./loading-blank.png) 0 0 no-repeat;
    background-size: contain;
    animation: loading 1.5s linear infinite;
  }
  .white {
    background-image: url(./loading-white.png);
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
