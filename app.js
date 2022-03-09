const lugar = require('./lugar/lugar')
const argv = require('./yargs/yargs').argv
const clima = require('./clima/clima')

const getTemperatura = async(direccion) => {
    try {
        let coors = await lugar.getLugarLatLng(direccion)
        let temp = await clima.getClima(coors.lat, coors.lng)
        return `La temperatura en ${direccion} es de ${temp}`
    } catch (error) {
        return `No se pudo determinar la temperatura en ${direccion}`
    }

}

getTemperatura(argv.direccion)
    .then(resp => console.log(resp))
    .catch(e => console.log(e))