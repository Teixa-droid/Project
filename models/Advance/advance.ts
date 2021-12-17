import { Schema, model } from "mongoose";
import { ProjectModel } from "../Project/project";
import { UserModel } from "../User/user";


interface Advance {
    ticket: Date;
    discription: string;
    note: [string];
    project: Schema.Types.ObjectId;
    createdby: Schema.Types.ObjectId;
}

const advancementSchema = new Schema<Advance>({

    ticket: {
        type: Date,
        required: true,
    },
    discription: {
        type: String,
        required: true,
    },
    note: [
        {
            type: String,
        },
    ],
    project: {
        type: Schema.Types.ObjectId,
        ref: ProjectModel,
        required: true,
    },
    createdby: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
});
const AdvancementModel = model('Advance', advancementSchema);
export { AdvancementModel };