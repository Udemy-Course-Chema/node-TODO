import { writeFileSync, existsSync, readFileSync } from 'node:fs';

const file = './db/data.json';
const guardarDB = ( data ) => {
    writeFileSync( file, JSON.stringify( data ) , err => {
        if( err ) throw err;
    });
};

const readData = () => {
    if( !existsSync( file ) ){
        return null
    }
    const info = readFileSync( file, { encoding:'utf-8' } );
    const data = JSON.parse( info );
    
    return data;
};

export {
    guardarDB,
    readData
}