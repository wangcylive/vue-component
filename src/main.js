import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'

// console.log(process.env.NODE_ENV)

const app = new Vue({
    render: h => h(App)
})

app.$mount()

document.body.appendChild(app.$el)

const importAbout = (path) => {
  return `/* webpackChunkName: 'about' */ ${path}`
}

const About = () => import('view/about')

const Product = () => import('./view/product')

console.log(importAbout('view/about'))

console.log(About)

setTimeout(() => {
  Product().then(({ default: ss, b }) => {
    console.log(ss, b)
  })

  About().then(module => {
    const AppConstructor = Vue.extend(module.default)

    const aboutApp = new AppConstructor()

    aboutApp.$mount()

    document.body.appendChild(aboutApp.$el)
  })
}, 1000)
