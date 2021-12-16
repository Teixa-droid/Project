import { model, Schema } from "mongoose";
import {Enum_ObjectiveType } from './enums'
import { ProjectModel } from "./project";

interface Objective{
    description: string;
    type: Enum_ObjectiveType;
}

const objectiveSchema = new Schema<Objective>({
    description: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: Enum_ObjectiveType,
        required: true,
    },
});

const ObjectiveModel = model('Objective',objectiveSchema);
export { ObjectiveModel };