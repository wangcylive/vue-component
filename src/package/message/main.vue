<template>
  <div class="dialog-module" v-if="visible">
    <div class="dialog-overlay"></div>
    <div class="dialog-container">
      <div class="dialog-body">
        <div class="dialog-message-text" :class="type">{{ message }}</div>
        <div class="dialog-message-handle">
          <button class="btn-submit" @click="submit">{{ submitText }}<span v-if="validAutoClose"> ({{ autoClose }})</span></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
let timeoutID = 0
export default {
  name: 'MessageModal',
  data () {
    return {
      message: '',
      type: '',
      visible: true,
      submitText: '我知道了',
      autoClose: 0
    }
  },
  computed: {
    validAutoClose () {
      const autoClose = this.autoClose
      return typeof autoClose === 'number' && !isNaN(autoClose) && isFinite(autoClose) && autoClose > 0
    }
  },
  created () {
    const f = () => {
      timeoutID = setTimeout(() => {
        this.autoClose--
        if (this.autoClose > 0) {
          f()
        } else {
          this.destroy()
        }
      }, 1000)
    }
    if (this.validAutoClose) {
      f()
    }
  },
  methods: {
    destroy () {
      clearTimeout(timeoutID)
      this.$destroy()
      this.$el.parentNode.removeChild(this.$el)
    },

    submit () {
      this.destroy()
    }
  }
}
</script>

<style lang='scss'>

</style>
