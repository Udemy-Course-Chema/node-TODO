//const { menu, pause } = require('../helpers/messages');
import colors from 'colors';
import { inquirerMenu } from '../helpers/inquirer.js';
import { pause } from '../helpers/messages.js';


const main = async( ) => {
    
    let opt = '';
    do{
      opt = await inquirerMenu();
      console.log( opt );
      if ( opt !== '0' ) await pause();

    }while( opt !== '0' );
}

// module.exports = main;
export{
  main
}
