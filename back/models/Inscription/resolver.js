import { InscriptionModel } from './inscription.js';
import { ProjectModel } from '../Project/project.js';
import { UserModel } from '../User/user.js';

const inscriptionResolver = {
    Inscription: {
        project: async (parent, args, context) => {
            return await ProjectModel.findOne({ _id: parent.project });
        },
        student: async (parent, args, context) => {
            return await UserModel.findOne({ _id: parent.student });
        },
    },
    Query: {
        Inscriptions: async (parent, args, context) => {

            let filter = {};
            if (context.userData) {
              if (context.userData.rol === 'LEADER') {
                const projects = await ProjectModel.find({ leader: context.userData._id });
                const projectList = projects.map((p) => p._id.toString());
                filter = {
                  project: {
                    $in: projectList,
                  },
                };
              }
            }

            const inscriptions = await InscriptionModel.find({ ...filter });
            return inscriptions;
        },
        /*  unapprovedRegistrations: async () => {
             const ina = await InscriptionModel.find({ state: 'PENDING' }).populate('student');
         }, */
    },
    Mutation: {
        createInscription: async (parent, args) => {
            const createdInscription = await InscriptionModel.create({
                project: args.project,
                student: args.student,
            });
            return createdInscription;
        },
        approveRegistration: async (parent, args) => {
            const approvedRegistation = await InscriptionModel.findByIdAndUpdate(
                args.id,
                {
                    status: 'ACCEPTED',
                    ticketentry: Date.now(),

                },
                { new: true }
            );
            return approvedRegistation;
        },
    },
};

export { inscriptionResolver };