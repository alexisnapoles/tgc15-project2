import axios from 'axios'
export default axios.create({
    baseURL: "https://silid-aklatan-api.herokuapp.com",
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
        
    }
})


/* 
axios.defaults.headers.post[] = ''
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*'
window.axios = axios
Vue.prototype.$axios = axios

*/