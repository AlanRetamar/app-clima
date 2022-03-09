const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Descripcion de la direccion',
        demand: true
    }
}).argv

module.exports = {
    argv
}