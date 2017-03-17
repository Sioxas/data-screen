/**
 * Created by sioxa on 2017/3/17 0017.
 */
import $http from 'axios'

export default{
  getPlantStatus(plantNum){
    return $http.post('http://localhost/login/index_files/data_plant_status.php', querystring.stringify({
      plant: plantNum
    }), {
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
  }
}
