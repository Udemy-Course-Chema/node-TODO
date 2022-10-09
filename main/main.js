//const { menu, pause } = require('../helpers/messages');
import colors from 'colors';
import { inquirerMenu, inquirerPause } from '../helpers/inquirer.js';


const main = async( ) => {
    
    let opt = '';

    do {

      opt = await inquirerMenu();
      console.log( { opt } );
      await inquirerPause();

    }while( opt !== '0' );
}

// module.exports = main;
export{
  main
}
