import { gql } from "apollo-server-express";
import { enumsTypes } from "../models/Enums/type";
import { userTypes } from "../models/User/type";
import { projectTypes } from "../models/Project/type";
import { advanceType } from "../models/Advance/type";

const globalTypes = gql`
  scalar Date
  `;

export const type = [globalTypes, enumsTypes, userTypes, projectTypes, advanceType];