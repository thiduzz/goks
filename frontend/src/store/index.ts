import Vue from 'vue'
import Vuex from 'vuex'
import ConnectionStore from '@/store/modules/connection'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ConnectionStore
  }
})
