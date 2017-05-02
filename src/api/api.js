/**
 * Created by sioxa on 2017/3/17 0017.
 */
import $http from 'axios'
import querystring from 'querystring'
import './../utils/date-format.js'

export default {
    /**
     * 获取机床面板状态
     *
     * @param {number} plantID 车间编号
     * @returns {Promise} Http Promise
     */
    getPlantStatus(plantID) {
        return $http.post('http://localhost/login/index_files/data_plant_status.php', querystring.stringify({
            plant: plantID
        }), {
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
    },

    /**
     * 获取机床详细信息
     *
     * @param {number} plantID 车间编号
     * @param {number} machineID 机床编号
     * @returns {Promise} Http Promise
     */
    getMachineDetail(plantID, machineID) {
        return $http.get('http://localhost/login/morris_files/newdata_morris.php', {
            params: {
                timestamp: new Date().Format("yyyy-MM-dd hh:mm:ss"),
                plant: plantID,
                machine: machineID
            }
        })
    }
}
