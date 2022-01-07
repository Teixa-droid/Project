import mongoose from "mongoose";
//import { Enum_ProjectStep, Enum_ProjectState, Enum_ObjectiveType } from "../Enums/enums.js";
import { ObjectiveModel } from "../objective.js";
import { UserModel } from "../User/user.js";

const { Schema, model } = mongoose;

/* interface Project {
    name: string;
    assumption: number;
    startdate: Date;
    enddate: Date;
    status: Enum_ProjectState;
    step: Enum_ProjectStep;
    leader: Schema.Types.ObjectId;
    objectives: [{ description: String, type: Enum_ObjectiveType }];
} */
const projectSchema = new Schema(
    {
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
            enum: ['ACTIVE', 'INACTIVE'],
            default: 'INACTIVE',
        },
        step: {
            type: String,
            enum: ['STARTED', 'DEVELOPING', 'FINISHED', 'NULL'],
            default: 'NULL',
        },
        leader: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: UserModel,
        },
        objectives: [
            {
                description: {
                    type: String,
                    required: true,
                },
                type: {
                    type: String,
                    enum: ['GENERAL', 'SPICIFIC'],
                    required: true,
                },
            },
        ],
    },
    {
        toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
        toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
    }
);

projectSchema.virtual('advances', {
    ref: 'Advance',
    localField: '_id',
    foreignField: 'project',
});
projectSchema.virtual('inscription', {
    ref: 'Inscription',
    localField: '_id',
    foreignField: 'project',
});

const ProjectModel = model('Project', projectSchema);

export { ProjectModel };