const axios = require('axios')

const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodeUrl }&key=AIzaSyBG1iGjyxnG90dkBQCUrCkKKl6RkYobVx4`)

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`La direccion ${direccion} no es valida`)
    }

    let location = resp.data.results[0]
    let address = location.formatted_address
    let coors = location.geometry.location
    return {
        direccion: address,
        lat: coors.lat,
        lng: coors.lng
    }
}

module.exports = {
    getLugarLatLng
}