import { AdvancementModel } from "./advance"

const advanceResolver = {
    Query: {
        Advances: async (parent, args)=>{
            const advances = await AdvancementModel.find();
            return advances;
        },
    },
    Mutation: {
        createAdvance: async (parents, args) => {
            const advanceCreated = AdvancementModel.create({
                ticket: args.ticket,
                discription: args.discription,
                project: args.project,
                createdby: args.createdby,
            });
            return advanceCreated;
        },
    },
};
export {advanceResolver};