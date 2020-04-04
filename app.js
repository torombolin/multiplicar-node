const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')
const argv = require('./config/yargas').argv

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado : ${archivo}`))
            .catch(err => console.log(err))
        break

    default:
        console.log('Comando no reconocido');
}