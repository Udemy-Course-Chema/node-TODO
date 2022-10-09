import inquirer from 'inquirer';
import colors    from 'colors';

const survey = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices: ['opt1','opt2','opt3']

    }
];

const inquirerMenu = async() => {
    try{
        console.clear();
        console.log('========================='.red);
        console.log('Seleccione una opción'.blue);
        console.log('=========================\n'.red);

        const opt = await inquirer.prompt( survey );

        return opt;
    }catch( err ){
        console.log( err );
        throw err;
    }
    

};

export {
    inquirerMenu
};
