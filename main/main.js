//const { menu, pause } = require('../helpers/messages');
import colors from 'colors';
import { inquirerMenu, inquirerPause, leerInput } from '../helpers/inquirer.js';
import { guardarDB, readData } from '../helpers/saveFile.js';
// const Tarea = require( '../models/tarea.js' );
import { Tareas } from '../models/tareas.js';


const main = async( ) => {
    
    let opt = '';
    const tareas = new Tareas();

    const loadData = readData();

    if(loadData){
      // Establecer tareas
    }
    await inquirerPause();

    do {

      opt = await inquirerMenu();
      switch(opt){
        case '1':
          // crear opción
          const desc = await leerInput( 'Descripción: ' );
          tareas.crearTarea( desc );
        break;

        case '2':
          console.log( tareas.listadoArr );
        break
      }

      // Guardar info en el archiv
      guardarDB( tareas.listadoArr );

      // Aquí pausamos el comando
      // await inquirerPause();

    }while( opt !== '0' );
}

// module.exports = main;
export{
  main
}
