import Vue from 'vue'
import VueApp from './vue-app'

new Vue({
  render: h => h(VueApp)
}).$mount(document.querySelector('#root'))