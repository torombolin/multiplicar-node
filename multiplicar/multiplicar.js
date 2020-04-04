// requireds
const fs = require('fs')

let data = ''

let listarTabla = (base, limite = 10) => {

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i} `)
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${ base * i}\n`)
        }

        fs.writeFile(`tablas/tabla-${base}-al${limite}.txt`, data, (err) => {
            if (err) reject(err)
            resolve(`tabla-${base}-al${limite}.txt`)
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}