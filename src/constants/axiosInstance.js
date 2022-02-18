const axios = require("axios")

const online = {
    url: "https://ecolioo.herokuapp.com/api",
    code: localStorage.getItem('x-code')
}
const dev = {
    url: "https://ecolioo-dev.herokuapp.com/api",
    code: localStorage.getItem('x-code')
}

const localhost = {
    url: "http://localhost:8000/api",
    code: localStorage.getItem('x-code')
}


const INSTANCE = localhost

const axiosInstance = axios.create({
    baseURL: INSTANCE.url,
    headers: {
        "x-code": INSTANCE.code
    }
}) 

const axiosAuthInstance = axios.create({
    baseURL: INSTANCE.url,
    headers: {
    }
}) 

const refresh = () =>  {
    axiosInstance.defaults.headers["x-code"] = localStorage.getItem('x-code')
    console.log('refreshed')
}

export default axiosInstance
export { axiosAuthInstance, refresh }