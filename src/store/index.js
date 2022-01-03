import Vue from 'vue'
import Vuex from 'vuex'
import {getAdminInfo} from '@/api/getData'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
	adminInfo: {
		avatar: 'default.jpg'
	},
	jichu:''
}

const mutations = {
	saveAdminInfo(state, adminInfo){
		state.adminInfo = adminInfo;
	},
	changeJichu(state,name){
		state.jichu=name;
	}
}

const actions = {
	async getAdminData({commit}){
		try{
			const res = await getAdminInfo()
			if (res.status == 1) {
				commit('saveAdminInfo', res.data);
			}else{
				throw new Error(res.type)
			}
		}catch(err){
			// console.log(err.message)
		}
	},
	getJichu({commit}){
		commit('changeJichu',localStorage.getItem('jichu'))
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
	plugins: [createPersistedState()]
})
