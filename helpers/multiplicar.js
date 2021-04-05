const fs = require("fs");
const colors = require('colors');


const crearArchivo = ( base = 5, listar ) => {

    
    return new Promise( ( resolve, reject ) => {

        console.clear();
        if(listar) {
            console.log('===================='.green);
            console.log('   Tabla del: ', colors.blue( base ) );
            console.log('===================='.green);
        }
        
        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }

        if(listar) console.log(salida);

        

        fs.writeFile(`./salida/tabla-${base}.txt`, salida, (err) => {
            if (err) throw reject(err);
            console.log(`tabla-${base}.txt creado`.rainbow);
            resolve(`tabla-${base}.txt`);
        });
        // fs.writeFileSync(`tabla-${base}.txt`, salida);
        // resolve(`tabla-${base}.txt`);
    });
}

module.exports = {
    crearArchivo
}