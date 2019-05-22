import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		menuIndex: 0,
	},
	mutations: {
		setMenuIndex(state, value) {
			state.menuIndex = value
		}
	}
})

export default store
