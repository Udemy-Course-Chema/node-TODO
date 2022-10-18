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
                name: `${ '1.'.blue } Crear Tarea.`,

            },
            {
                value: '2',
                name: `${ '2.'.blue } Listar Tareas.`,

            },
            {
                value: '3',
                name: `${ '3.'.blue } Listar Tareas Completadas.`,

            },
            {
                value: '4',
                name: `${ '4.'.blue } Listar Tareas Pendientes.`,

            },
            {
                value: '5',
                name: `${ '5.'.blue } Completar Tarea(s).`,

            },
            {
                value: '6',
                name: `${ '6.'.blue } Borrar Tarea(s).`,

            },
            {
                value: '0',
                name: `${ '0.'.blue } Salir`,

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


const leerInput = async( mensaje ) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      mensaje,
      validate( value ){
        if( value.length === 0 ) return 'Por favor ingrese un valor';
        return true;
      }
    }
  ];
  const { desc } = await inquirer.prompt(question);

  return desc;
};
export {
    inquirerMenu,
    inquirerPause,
    leerInput,
};
