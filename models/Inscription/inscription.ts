import { Schema, model } from "mongoose";
import { Enum_InscriptionState } from "../Enums/enums";
import { ProjectModel } from "../Project/project";
import { UserModel } from "../User/user";

interface Inscription{
    status: Enum_InscriptionState;
    ticketentry: Date;
    ticketegress: Date;
    project:Schema.Types.ObjectId;
    student:Schema.Types.ObjectId;
}


const inscriptionSchema = new  Schema<Inscription>({
    status: {
        type: String,
        enum: Enum_InscriptionState,
        required: true,
    },
    ticketentry: {
        type: Date,
        required: true,
    },
    ticketegress: {
        type: Date,
        required: true,
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

const IscriptionModel = model('Inscription', inscriptionSchema);

export { IscriptionModel }; 