import Vue from 'vue'
import App from './App.vue'
import VueNamedMixins from '@/plugin'

console.log(VueNamedMixins.version);

Vue.use(VueNamedMixins, {})

Vue.mixin('busy ')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
