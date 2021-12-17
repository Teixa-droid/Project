import { Schema, model } from 'mongoose';
import {Enum_Rol, Enum_UserState} from '../Enums/enums';

interface User{
    email: string;
    identification:string;
    name:string;
    lastname:string;
    rol: Enum_Rol;
    state: Enum_UserState;
}


const userSchema = new Schema<User>({
    email:{
        type:String,
        required: true,
        unique: true,
        validate:{
            validator: (email) => {
                return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email);
            },
                // (email) => {
            //    if(!email.includes('@')) {
            //        return false;
            //    } else {
            //        return false;
            //    }
            //}, 
                
            message: 'O formato do email esta mal',
        },
    },
    identification:{
        type:String,
        required: true,
        unique: true,
    },
    name:{
        type:String,
        required:true,
    },
    lastname: {
        type:String,
        required: true,
    },
    rol:{
        type:String,
        required:true,
        enum:Enum_Rol,
    },
    state: {
        type:String,
        enum: Enum_UserState,
        default:Enum_UserState.PENDING,
    },
});

const UserModel = model('User', userSchema);

export { UserModel } ;