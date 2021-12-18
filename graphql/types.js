import { gql } from "apollo-server-express";
import { enumsTypes } from "../models/Enums/type.js";
import { userTypes } from "../models/User/type.js";
import { projectTypes } from "../models/Project/type.js";
import { advanceType } from "../models/Advance/type.js";
import { inscriptionTypes } from "../models/Inscription/type.js";

const globalTypes = gql`
  scalar Date
  `;

export const type = [globalTypes, enumsTypes, userTypes, projectTypes, advanceType, inscriptionTypes,];