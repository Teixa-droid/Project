import { UserModel } from "./user.js";
import bcrypt from 'bcrypt';

const userResolvers = {

    Query: {
        Users: async (parent, args, context) => {
            const users = await UserModel.find();
           /*  .populate([
                {
                    path: 'inscriptions',
                    populate: {
                        path: 'project',
                        populate: [{ path: 'leader' }, { path: 'advances' }],
                    },
                },
                {
                    path: 'projectsFront',
                },
                {
                    path: 'advances',
                },
            ]); */
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