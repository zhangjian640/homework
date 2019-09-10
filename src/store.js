import Vue from 'vue'
import Vuex from 'vuex'
import { saveAgents, loadAgents } from '@/utils/cache'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    agents: loadAgents()
  },
  mutations: {
    SET_AGENTS: (state, payload) => {
      saveAgents(payload)
      // state.agents = payload
    }
  },
  actions: {

  }
})
