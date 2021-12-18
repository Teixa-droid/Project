import mongoose from "mongoose";
//import { Enum_InscriptionState } from "../Enums/enums.js";
import { ProjectModel } from "../Project/project.js";
import { UserModel } from "../User/user.js";

const {Schema, model} = mongoose;;

/* interface Inscription{
    status: Enum_InscriptionState;
    ticketentry: Date;
    ticketegress: Date;
    project:Schema.Types.ObjectId;
    student:Schema.Types.ObjectId;
} */


const inscriptionSchema = new  Schema(
    {
    status: {
        type: String,
        enum: ['ACCEPTED', 'REJECTED', 'PENDING'],
        default: 'PENDING',
        required: true,
    },
    ticketentry: {
        type: Date,
        required: false,
    },
    ticketegress: {
        type: Date,
        required: false,
    },
    project: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },
    student: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
});

const InscriptionModel = model('Inscription', inscriptionSchema);

export { InscriptionModel }; 