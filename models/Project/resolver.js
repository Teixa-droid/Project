import { ProjectModel } from "./project.js";

const projectResolvers = {

    Query: {
        Projects: async (parent, args) => {
            const projects = await ProjectModel.find().populate({
                path:'advances',
                populate: {
                    path: 'createdby'
                },
            }).populate('leader');
            return projects;
        },
    },
    Mutation: {
        
        createProject: async (parent, args) => {
            const createdproject = await ProjectModel.create({
                name: args.name,
                state: args.state,
                step: args.step,
                startdate: args.startdate,
                enddate: args.enddate,
                assumption: args.assumption,
                leader: args.leader,
                objectives: args.objectives,
            });
            return createdproject;
        },

    },

};

export { projectResolvers };