const axios = require('axios')

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=7ef38fec9505c3e944ca2d648b25d671`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}