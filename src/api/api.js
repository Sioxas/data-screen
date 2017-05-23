/**
 * Created by sioxa on 2017/3/17 0017.
 */
import $http from 'axios'
import querystring from 'querystring'
import './../utils/date-format.js'

/**
 * 为此项目定制的API工厂 当response.data不是JSON对象时会reject
 * Example:
 * new APIFactory($http.get(...)).then(data => ...).catch(e => ...)
 *
 * @class APIFactory
 */
class APIFactory {
    /**
     * Creates an instance of APIFactory.
     * @param {Promise} promise Http Promise
     *
     * @memberof APIFactory
     */
    constructor(AxiosPromise) {
        setTimeout(() => {
            this.resolve = typeof this.resolve === 'function' ? this.resovle : value => value
            this.reject  = typeof this.reject  === 'function' ? this.reject  : reason => reason
            try {
                AxiosPromise.then(response => {
                    typeof response.data === 'object'
                        ?this.resovle(response.data)
                        :this.reject(response.data)
                }).catch(e => {
                    throw e
                })
            } catch(e){
                this.reject(e)
                console.error(e)
            }
        })
        return this
    }

    /**
     * 设置 Resolve 方法
     *
     * @param {function} resolve 执行成功回调函数
     * @returns APIFactory
     *
     * @memberof APIFactory
     */
    then(resolve) {
        this.resovle = resolve
        return this
    }

    /**
     * 设置 Reject 方法
     *
     * @param {function} reject 异常回调函数
     * @returns APIFactory
     *
     * @memberof APIFactory
     */
    catch(reject) {
        this.reject = reject
        return this
    }
}

export default {
    /**
     * 获取机床面板状态
     *
     * @param {number} plantID 车间编号
     * @returns {APIFactory} Http Promise
     */
    getPlantStatus(plantID) {
        return new APIFactory($http.post('http://localhost/login/index_files/data_plant_status.php', querystring.stringify({
            plant: plantID
        }), {
                header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }))
    },

    /**
     * 获取机床详细信息
     *
     * @param {number} plantID 车间编号
     * @param {number} machineID 机床编号
     * @returns {Promise} Http Promise
     */
    getMachineDetail(plantID, machineID) {
        return new APIFactory($http.get('http://localhost/login/morris_files/newdata_morris.php', {
            params: {
                timestamp: new Date().Format("yyyy-MM-dd hh:mm:ss"),
                plant: plantID,
                machine: machineID
            }
        }))
    },

    /**
     * 获取机床报警信息
     *
     * @param {number} plant 车间编号
     * @param {number} machine 机床编号
     * @returns {Promise} Http Promise
     */
    getMachineWarn(plant, machine) {
        return new APIFactory($http.get('http://localhost/login/morris_files/newdata_morris_warn.php', {
            params: {
                timestamp: new Date().Format("yyyy-MM-dd hh:mm:ss"),
                plant,
                machine
            }
        }))
    },

    /**
     * 获取机床历史状态
     *
     * @param {number} plant 车间编号
     * @param {number} machine 机床编号
     * @param {Datetime yyyy/MM/dd hh:mm:ss} f_date 开始时间
     * @param {Datetime yyyy/MM/dd hh:mm:ss} t_date 结束时间
     * @returns {Promise} Http Promise
     */
    getMachineHistoryStatus(plant,machine,f_date,t_date){
        return new APIFactory($http.post('http://localhost/login/inquiry_files/for_mac_status.php',querystring.stringify({
            plant,machine,f_date,t_date
        })))
    },

    /**
     * 获取机床历史状态列表
     *
     * @param {number} plant 车间编号
     * @param {number} machine 机床编号
     * @param {Datetime yyyy/MM/dd hh:mm:ss} f_date 开始时间
     * @param {Datetime yyyy/MM/dd hh:mm:ss} t_date 结束时间
     * @returns {Promise} Http Promise
     */
    getMachineHistoryStatusList(plant,machine,f_date,t_date){
        return new APIFactory($http.post('http://localhost/login/history_files/history_data_status.php',querystring.stringify({
            plant,machine,f_date,t_date
        })))
    },

    /**
     * 获取主轴转速
     *
     * @param {number} plant 车间编号
     * @param {number} machine 车间编号
     * @param {Datetime yyyy/MM/dd hh:mm:ss} f_date 开始时间
     * @param {Datetime yyyy/MM/dd hh:mm:ss} t_date 结束时间
     * @returns {Promise} Http Promise
     */
    getSpindleSpeedList(plant,machine,f_date,t_date){
        return new APIFactory($http.post('http://localhost/login/history_files/history_data_acts.php',querystring.stringify({
            plant,machine,f_date,t_date
        })))
    },

    /**
     * 获取警报信息记录
     *
     * @param {number} plant 车间编号
     * @param {number} machine 机床编号
     * @param {Datetime yyyy/MM/dd hh:mm:ss} f_date 开始时间
     * @param {Datetime yyyy/MM/dd hh:mm:ss} t_date 结束时间
     * @returns {Promise} Http Promise
     */
    getHistoryDataWarn(plant,machine,f_date,t_date){
        return new APIFactory($http.post('http://localhost/login/history_files/history_data_warn.php',querystring.stringify({
            plant,machine,f_date,t_date
        })))
    },

    /**
     * 获取机床加工产品记录表
     *
     * @param {number} plant 车间编号
     * @param {number} machine 机床编号
     * @param {Datetime yyyy/MM/dd hh:mm:ss} f_date 开始时间
     * @param {Datetime yyyy/MM/dd hh:mm:ss} t_date 结束时间
     * @param {number} page 页码
     * @param {number} [isdes=0]
     * @param {number} [id=99]
     * @returns {Promise} Http Promise
     */
    getHistoryDataProcess(plant,machine,f_date,t_date,page,isdes=0,id=99){
        return new APIFactory($http.post('http://localhost/login/history_files/history_data_process.php',querystring.stringify({
            plant,machine,f_date,t_date,page,isdes,id
        })))
    },

    /**
     * 获取机床加工产品记录数量
     *
     * @param {number} plant 车间编号
     * @param {number} machine 机床编号
     * @param {Datetime yyyy/MM/dd hh:mm:ss} f_date 开始时间
     * @param {Datetime yyyy/MM/dd hh:mm:ss} t_date 结束时间
     * @returns {Promise} Http Promise
     */
    getHistoryDataProcessNum(plant,machine,f_date,t_date){
        return $http.post('http://localhost/login/history_files/history_data_process_num.php',querystring.stringify({
            plant,machine,f_date,t_date
        }))
    }
}
