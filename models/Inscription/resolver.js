import { InscriptionModel } from "./inscription.js";

const inscriptionResolver = {
    Query: {
        Inscriptions: async (parent, args) => {
            const inscriptions = await InscriptionModel.find();
            return inscriptions;
        },
    },
    Mutation: {
        createInscription: async (parent, args) => {
            const createdInscription = await InscriptionModel.create({
                status: args.status,
                project: args.project,
                student: args.student,
            });
            return createdInscription;
        },
        approveRegistration: async (parent,args) => {
            const approvedRegistation = await InscriptionModel.findByIdAndUpdate(args.id,{
                status:'ACCEPTED',
                ticketentry:Date.now(),

            },
            {new: true}
            );
            return approveRegistration;
        },
    },
};

export {inscriptionResolver};