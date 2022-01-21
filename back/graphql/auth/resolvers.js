import { UserModel } from '../../models/User/user.js';
import bcrypt from 'bcrypt';
import { generateToken } from '../../utils/tokenUtils.js';

const resolversAuthentication = {
    Mutation: {
        registration: async (parent, args) => {

            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(args.password, salt);
            const userCreated = await UserModel.create({
                name: args.name,
                lastname: args.lastname,
                identification: args.identification,
                email: args.email,
                rol: args.rol,
                password: hashedPassword,
            });
            console.log('utilizador criado', userCreated);
            return {
                token: generateToken({
                    _id: userCreated._id,
                    name: userCreated.name,
                    lastname: userCreated.lastname,
                    identification: userCreated.identification,
                    email: userCreated.email,
                    rol: userCreated.rol,
                }),
            };
        },

        login: async (parent, args) => {
            const userFound = await UserModel.findOne({ email: args.email });
            if (await bcrypt.compare(args.password, userFound.password)) {
                return {
                  token: generateToken({
                    _id: userFound._id,
                    name: userFound.name,
                    lastname: userFound.lastname,
                    identification: userFound.identification,
                    email: userFound.email,
                    rol: userFound.rol,
                    mypicture: userFound.mypicture,
                  }),
                };
            }
        },

        refreshToken: async(parent,args, context) =>{
            console.log('context', context);
            if(!context.userData){
                return {
                    error: 'token invalid',
                };
            } else {
                return {
                  token: generateToken({
                    _id: context.userData._id,
                    name: context.userData.name,
                    lastname: context.userData.lastname,
                    identification: context.userData.identification,
                    email: context.userData.email,
                    rol: context.userData.rol,
                    mypicture: context.userData.mypicture,
                  }),
                };
            }
            
        },
    },
};

export { resolversAuthentication };