/**
 * @name apis配置
 */
import axios from 'axios'

const Apis = {
  testDepart(data) {
    return axios.get('http://localhost:8081/depart/selectAll', data)
  }
}

export default Apis
