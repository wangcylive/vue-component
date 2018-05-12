import Vue from 'vue'
import ConfirmModal from './main'

const ConfirmModalConstructor = Vue.extend(ConfirmModal)

export function confirm (message) {
  return new Promise((resolve, reject) => {
    const app = new ConfirmModalConstructor({
      data: {
        message
      },
      methods: {
        destroy () {
          this.$destroy()
          this.$el.parentNode.removeChild(this.$el)
        },
        submit () {
          this.destroy()
          resolve()
        },
        cancel () {
          this.destroy()
          reject() // eslint-disable-line
        }
      }
    })
    app.$mount()
    document.body.appendChild(app.$el)
  })
}

export default {
  install: Vue => {
    Vue.prototype.$confirm = confirm
  }
}
