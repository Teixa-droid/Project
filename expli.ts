import DBconect from "./db/db";
import { UserModel } from "./models/user";
import { Enum_ObjectiveType, Enum_Rol, Enum_UserState } from './models/enums';
import { ProjectModel } from "./models/project";
import { ObjectId } from "mongoose";
import { ObjectiveModel } from "./models/objective";

// METODOLOGIA ONE TO MANY #1
const createProjectsWithObjectives1 = async () => {
    
    
    const initialuser = await UserModel.create({
        name:'Ruben',
        lastname:'Teixeira',
        email:'naosei@cc.com',
        identification:'1234',
        rol: Enum_Rol.administrator,
        state: Enum_UserState.authorized,
    });

    const projectCreated = await ProjectModel.create({
        name:'Project 1',
        startdate: new Date('2045/12/23'),
        enddate: new Date('2045/12/23'),
        assumption: 120000,
        leader: initialuser._id,
    });
    const generalobjective1 = await ObjectiveModel.create({
        description:"este é o objetivo especifico 1",
        type: Enum_ObjectiveType.spicific,
        project: projectCreated._id,
    });
    const generalobjective2 = await ObjectiveModel.create({
        description:"este é o objetivo especifico 2",
        type: Enum_ObjectiveType.spicific,
        project: projectCreated._id,
    });

};

const consultaComObjetivos1 = async () => {
    const projeto = await ProjectModel.findOne({ _id: '61b5380ad89e89200e1d60cb'});
    console.log('O projeto que encontrei foi', projeto);

    const objectives = await ObjectiveModel.find({_project: '61b5380ad89e89200e1d60cb'});
    console.log('O objetivo que encontrei foi', objectives);

    const projetoscomobjetivos = { ...projeto, objectives};
    console.log("o projeto com objetivos é.", projetoscomobjetivos);
}
const criarprojComObjetivos2 = async () => {
     
    const initialuser = await UserModel.create({
        name:'Ruben',
        lastname:'Teixeira',
        email:'naosei@cc.com',
        identification:'1234',
        rol: Enum_Rol.administrator,
        state: Enum_UserState.authorized,
    });
    const generalobjective = await ObjectiveModel.create({
        description:"este é o objetivo geral 1",
        type: Enum_ObjectiveType.spicific,
    });
    const generalobjective1 = await ObjectiveModel.create({
        description:"este é o objetivo especifico 1",
        type: Enum_ObjectiveType.spicific,
    });
    const generalobjective2 = await ObjectiveModel.create({
        description:"este é o objetivo especifico 2",
        type: Enum_ObjectiveType.spicific,
    });
    const projectCreated = await ProjectModel.create({
        name:'Project 1',
        startdate: new Date('2045/12/23'),
        enddate: new Date('2045/12/23'),
        assumption: 120000,
        leader: initialuser._id,
        objectives:[
            generalobjective._id,
            generalobjective1._id,
            generalobjective2._id,
        ],
    });
}
const consultaprojComObjetivos2 = async () => {
    const project = await ProjectModel.find({id: '61b54a68eec6e17e595e6f95' }).populate('objectives');
    console.log('projeto encontrado', JSON.stringify(project));
    
}
// MOTODOLOGIA ONE TO MANY 3
const criarprojComObjetivos3 = async () => {
     
    const initialuser = await UserModel.create({
        name:'Ruben',
        lastname:'Teixeira',
        email:'naosei@cc.com',
        identification:'1234',
        rol: Enum_Rol.administrator,
        state: Enum_UserState.authorized,
    });

    const projectCreated = await ProjectModel.create({
        name:'Project 1',
        startdate: new Date('2045/12/23'),
        enddate: new Date('2045/12/23'),
        assumption: 120000,
        leader: initialuser._id,
        objectives:[
            {description: 'Este é o objetivo geral', type: Enum_ObjectiveType.general},
            {description: 'Este é o objetivo especifico 1', type: Enum_ObjectiveType.spicific},
            {description: 'Este é o objetivo especifico 2', type: Enum_ObjectiveType.spicific},
        ],
    });
}


const main = async () => {
    await DBconect();
    

   
    
};

main();

//CRUD USER

/*  // criar utilizadores
 await UserModel.create({
    lastname: "Pereira",
    email:"ds1@cccv.com",
    identificacion: "1236456",
    name: "rui",
    rol: Enum_Rol.administrator,
})
.then((u) => {
    console.log('utilizador criado', u);
})
.catch((e) => {
    console.error('Erro ao criar o utilizador', e); 
});

 // OBTER UTILIZADORES
await UserModel.find().then((u) => {
    console.log('users',u);
})
.catch(e=>{
    console.error("erro ao obter o utlizador",e);
});   */
/* await UserModel.findOneAndUpdate(
    {email: 'dsl@const.com'},
    {
        name: 'Joao',
        lastname: 'Lopes',
    }
).then(u=>{
    console.log('utilizador atualizado', u);

}).catch(e =>{
    console.log('erro ao atualizar',e)
}); */

/*  //OBTER UM SO UTILIZADOR
await UserModel.findOne({identificacion :'16546789'}).then(u=>{
    console.log('utlizador encontrado', u);
}).catch((e) => {
    console.error(e);
}); */
/* // ELIMINAR UTILIZADOR
await UserModel.findOneAndDelete({ email: 'dsl@const.com'})
.then((u) => {
    console.log('utilizador eliminado: ', u);
})
.catch((e) => {
    console.error(e);
}); */
