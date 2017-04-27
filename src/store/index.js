/**
 * Created by sioxa on 2017/3/17 0017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state:{
    /**机床详情面板是否显示 */
    machineDetailShow:false,
    /**（机床详情）机床车间编号 */
    plantID:1,
    /**（机床详情）机床编号 */
    machineID:null
  },
  getters,
  mutations,
  actions,
  strict: debug,
  // plugins: debug ? [createLogger()] : []
})
