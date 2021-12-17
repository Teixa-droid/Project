import { Schema, model } from "mongoose";
import { Enum_ProjectStep, Enum_ProjectState, Enum_ObjectiveType } from "../Enums/enums";
import { ObjectiveModel } from "../objective";
import { UserModel } from "../User/user";

interface Project {
    name: string;
    assumption: number;
    startdate: Date;
    enddate: Date;
    status: Enum_ProjectState;
    step: Enum_ProjectStep;
    leader: Schema.Types.ObjectId;
    objectives: [{ description: String, type: Enum_ObjectiveType }];
}
const projectSchema = new Schema<Project>({
    name: {
        type: String,
        required: true,
    },
    assumption: {
        type: Number,
        required: true,
    },
    startdate: {
        type: Date,
        required: true,
    },
    enddate: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: Enum_ProjectState,
        default: Enum_ProjectState.INACTIVE,
    },
    step: {
        type: String,
        enum: Enum_ProjectStep,
        default: Enum_ProjectStep.NULL,
    },
    leader: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: UserModel
    },
    objectives: [
        {
            description: {
                type: String,
                required: true,
            },
            type: {
                type: String,
                enum: Enum_ObjectiveType,
                required: true,
            },
        },
    ],
});

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };