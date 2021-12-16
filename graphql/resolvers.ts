import { ProjectModel } from "../models/project";
import { UserModel } from "../models/user";

const resolvers = {

    Query: {
        Users: async (parent, args) => {
            const users = await UserModel.find();
            return users;
        },
        User: async (parent, args) => {
            const user = await UserModel.findOne({ _id: args._id })
            return user;
        },
        Projects: async (parent, args) => {
            const projects = await ProjectModel.find().populate('leader');
            return projects;
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const createdUser = await UserModel.create({
                name: args.name,
                lastname: args.lastname,
                identification: args.identification,
                email: args.email,
                rol: args.rol,
            });
            if (Object.keys(args).includes('state')) {
                createdUser.state = args.state;
            }
            return createdUser;
        },
        editUser: async (parent, args) => {
            const editedUser = await UserModel.findByIdAndUpdate(args.id, {
                name: args.name,
                lastname: args.lastname,
                identification: args.identification,
                email: args.email,
                rol: args.rol,
                state: args.state,
            });
            return editedUser;
        },
        deleteUser: async (parent, args) => {
            if (Object.keys(args).includes('_id')) {
                const deletedUser = await UserModel.findOneAndDelete({ _id: args._id });
                return deletedUser;
            } else if (Object.keys(args).includes('mail')) {
                const deletedUser = await UserModel.findOneAndDelete({ mail: args.mail });
                return deletedUser;
            }
        },
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

export { resolvers };