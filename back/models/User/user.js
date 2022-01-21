import mongoose from "mongoose";

const { Schema, model } = mongoose;
//import {Enum_Rol, Enum_UserState} from '../Enums/enums.js';
/* 
interface User{
    email: string;
    identification:string;
    name:string;
    lastname:string;
    rol: Enum_Rol;
    state: Enum_UserState;
} */


const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
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
        password: {
            type: String,
            required: true,
        },
        identification: {
            type: String,
            required: true,
            unique: true,
        },
        name: {
            type: String,
            required: true,
        },
        lastname: {
            type: String,
            required: true,
        },
        mypicture: {
            type: String,
            required: true,
        },
        rol: {
            type: String,
            required: true,
            enum: ['STUDENT', 'LEADER', 'ADMINISTRATOR'],
        },
        state: {
            type: String,
            enum: ['PENDING', 'AUTHORIZED', 'UNAUTHORIZED'],
            default: 'PENDING',
        },
    });
userSchema.virtual('projectsFront', {
    ref: 'Project',
    localField: '_id',
    foreignField: 'leader',
});
userSchema.virtual('advanceCreated', {
    ref: 'Advance',
    localField: '_id',
    foreignField: 'createdby',
});
userSchema.virtual('inscriptions', {
    ref: 'Inscription',
    localField: '_id',
    foreignField: 'student',
});


const UserModel = model('User', userSchema);

export { UserModel };