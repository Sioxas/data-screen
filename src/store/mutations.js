/**
 * Created by sioxa on 2017/3/17 0017.
 */
import types from './types'

export default {
    /**
     * MUTATION 关闭机床状态面板
     * 
     * @param {any} state 
     */
    [types.CLOSE_MACHINE_DETAIL_PANNEL](state) {
        state.machineDetailShow = false
    },

    /**
     * MUTATION 打开机床状态面板
     * 
     * @param {any} state 
     */
    [types.OPEN_MACHINE_DETAIL_PANNEL](state,machineID) {
        state.machineID=machineID
        state.machineDetailShow = true
    }
}
