import { ProjectModel } from './project.js';

const projectResolvers = {

    Query: {
        Projects: async (parent, args, context) => {

            const projects = await ProjectModel.find();
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
        editProject: async (parent, args) => {
            const editedProject = await ProjectModel.findByIdAndUpdate(
                args._id,
                { ...args.fields },
                { new: true }
            );
            return editedProject;
        },
        createObjective: async (parent, args) => {
            const projectWithObjective = await ProjectModel.findByIdAndUpdate(
                args.idProject,
                {
                    $addToSet: {
                        objectives: { ...args.fields },
                    },
                },
                { new: true }
            );
            return projectWithObjective;
        },
        editObjective: async (parent, args) => {
            const editedProject = await ProjectModel.findByIdAndUpdate(
                args.idProject,
                {
                    $set: {
                        [`objectives.${args.indexObjective}.description`]: args.fields.description,
                        [`objectives.${args.indexObjective}.type`]: args.fields.type,
                    },
                },
                { new: true }
            );
            return editedProject;

        },
        removeObjective: async (parent, args) => {
            const ProjectObjective = await ProjectModel.findByIdAndUpdate(
                { _id: args.idProject },
                {
                    $pull: {
                        objectives: {
                            _id: args.idObjective,
                        },
                    },
                },
                { new: true }
            );
            return ProjectObjective;
        },
    },

};

export { projectResolvers };