import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDragon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDragon)

Vue.component('font-awesome-icon', FontAwesomeIcon)
//end font-awesome

Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

const store = new Vuex.Store({
  state:{
    player1: {},
    player2: {}
  },
  mutations:{
    player1(state,obj){
      state.player1 = obj
    },
    player2(state,obj){
      state.player2 = obj
    }
  }
})

new Vue({
  render: h => h(App),
  router: router,
  store: store

}).$mount('#app')
