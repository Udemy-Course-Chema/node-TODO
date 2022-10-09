import colors from 'colors';
import * as readline from 'node:readline';


const mostrarMenu = () => {
  
  return new Promise( res => {

    console.clear();
    console.log('========================='.red);
    console.log('Seleccione una opción'.blue);
    console.log('=========================\n'.red);
    
    console.log(`${ '1.'.green } Crear Tarea`);
    console.log(`${ '2.'.green } Listar Tareas`);
    console.log(`${ '3.'.green } Listar Tareas Completas`);
    console.log(`${ '4.'.green} Listar Tareas Pendientes`);
    console.log(`${ '5.'.green} Completar Tarea(s)`);
    console.log(`${ '0.'.green } Salir\n`);
    
  const leerLinea = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leerLinea.question('Seleccione una opción:', (opt) => {
    leerLinea.close();
    return res(opt);
  });
  } );
}

const pause = () =>{
  return new Promise( res => {

  const leerLinea = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  leerLinea.question(`\nPresione ${ 'ENTER'.red } para continuar\n`, (opt) => {
    //console.log({ opt });
    leerLinea.close();
    return res();
  });
  } );
}


// module.exports = {
//     menu: mostrarMenu,
//     pause
// };
export{
  mostrarMenu,
  pause
}
