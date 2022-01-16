import { AdvancementModel } from "./advance.js"

const advanceResolver = {
    Query: {
        Advances: async (parent, args)=>{
            const advances = await AdvancementModel.find().populate('project').populate('createdby');
            return advances;
        },
        advancefilter: async (parents, args) => {
            const advancedfilter = await (await AdvancementModel.findOne({ project: args._id})).populate('project').populate('createdby');
            return advancedfilter;
        },
    },
    Mutation: {
        createAdvance: async (parents, args) => {
            const advanceCreated = await AdvancementModel.create({
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