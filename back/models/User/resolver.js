import { UserModel } from "./user.js";
import bcrypt from 'bcrypt';

const userResolvers = {
    User: {
        inscriptions: async (parent, args, context) => {
            return InscriptionModel.find({ student: parent._id });
        },
    },
    Query: {
        Users: async (parent, args, context) => {
            console.log(args);
            const users = await UserModel.find({ ...args.filter });
            return users;
        },
        User: async (parent, args) => {
            const user = await UserModel.findOne({ _id: args._id })
            return user;
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
            const createdUser = await UserModel.create({
                name: args.name,
                lastname: args.lastname,
                identification: args.identification,
                email: args.email,
                rol: args.rol,
                password: hashedPassword,
            });
            if (Object.keys(args).includes('state')) {
                createdUser.state = args.state;
            }
            return createdUser;
        },
        editUser: async (parent, args) => {
            const editedUser = await UserModel.findByIdAndUpdate(args._id, {
                name: args.name,
                lastname: args.lastname,
                identification: args.identification,
                email: args.email,
                state: args.state,
            },
                { new: true }
            );
            return editedUser;
        },
        editProfile: async (parent, args) => {
            const userEdited = await UserModel.findOneAndUpdate(
              args._id,
              { ...args.fields },
              { new: true }
            );
            return userEdited;
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


    },

};

export { userResolvers };