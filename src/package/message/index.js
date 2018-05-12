import Vue from 'vue'
import MessageModal from './main'

const MessageModalConstructor = Vue.extend(MessageModal)

export function message (message, callback) {
  const options = {}
  if (Object.prototype.toString.call(message) === '[object Object]') {
    Object.assign(options, message)
  } else {
    Object.assign(options, { message })
  }

  const app = new MessageModalConstructor({
    data: options,
    destroyed () {
      typeof callback === 'function' && callback()
    }
  })

  app.$mount()

  document.body.appendChild(app.$el)

  return app
}

export default {
  install: Vue => {
    Vue.prototype.$message = message
  }
}
