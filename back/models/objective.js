import mongoose from "mongoose";
//import {Enum_ObjectiveType } from './Enums/enums'
//import { ProjectModel } from "./Project/project.js";

const {Schema, model} = mongoose;

/* interface Objective{
    description: string;
    type: Enum_ObjectiveType;
} */

const objectiveSchema = new Schema(
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
});

const ObjectiveModel = model('Objective',objectiveSchema);
export { ObjectiveModel };