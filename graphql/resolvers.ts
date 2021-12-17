import { projectResolvers } from "../models/Project/resolver";
import { userResolvers } from "../models/User/resolver";
import { advanceResolver } from "../models/Advance/resolver";

export const resolver = [userResolvers, projectResolvers, advanceResolver];