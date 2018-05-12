<template>
  <div class="dialog-module" v-if="visible">
    <div class="dialog-overlay"></div>
    <div class="dialog-container">
      <div class="dialog-body">
        <div class="dialog-confirm-text">{{ message }}</div>
        <div class="dialog-confirm-handle">
          <button class="btn-cancel" @click="cancel">{{ cancelText }}</button>
          <button class="btn-submit" @click="submit">{{ submitText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmModal',
  data () {
    return {
      message: '',
      visible: true,
      cancelText: '取消',
      submitText: '确认'
    }
  },
  methods: {
    submit () {},
    cancel () {}
  }
}
</script>

<style lang='scss'>

</style>
