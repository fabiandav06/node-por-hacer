const { demand } = require('yargs');

const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado la tarea o pendiente'
};


const argv = require('yargs')
    .command('crear', 'Crear un elemnto por hacer', {
        descripcion
    })
    .command('actualizar', 'Actauliza el esatdo completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea de la lista', {
        descripcion
    })
    .help()
    .argv

module.exports = {
    argv
}