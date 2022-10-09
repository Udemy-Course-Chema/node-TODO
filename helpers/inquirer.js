import inquirer from 'inquirer';
import colors    from 'colors';

const survey = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear Tarea.',

            },
            {
                value: '2',
                name: '2. Listar Tareas.',

            },
            {
                value: '3',
                name: '3. Listar Tareas Completadas.',

            },
            {
                value: '4',
                name: '4. Listar Tareas Pendientes.',

            },
            {
                value: '5',
                name: '5. Completar Tarea(s).',

            },
            {
                value: '6',
                name: '6. Borrar Tarea(s).',

            },
            {
                value: '0',
                name: '0. Salir',

            }
        ]

    }
];



const inquirerMenu = async() => {
    try{
        console.clear();
        console.log('========================='.red);
        console.log('Seleccione una opción'.blue);
        console.log('=========================\n'.red);

        const { opcion } = await inquirer.prompt( survey );

        return opcion;
    }catch( err ){
        console.log( err );
    }
};

const inquirerPause = async() => {
    try{
        const stopping = [
            {
                type: 'input',
                name: 'enter',
                message: `Presione ${ 'ENTER'.green } para continuar`,
            }
        ];
        console.log('\n');
        await inquirer.prompt( stopping );
    }catch( err ){
        throw err;
    }
}

export {
    inquirerMenu,
    inquirerPause
};
