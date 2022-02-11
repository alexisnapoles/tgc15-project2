import axios from 'axios'
export default axios.create({
    baseURL: "https://silid-aklatan-api.herokuapp.com",
    headers: {
        'Content-Type': 'application/json',
    }
})