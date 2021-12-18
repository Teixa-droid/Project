import { projectResolvers } from "../models/Project/resolver.js";
import { userResolvers } from "../models/User/resolver.js";
import { advanceResolver } from "../models/Advance/resolver.js";
import { inscriptionResolver } from "../models/Inscription/resolver.js";

export const resolver = [userResolvers, projectResolvers, advanceResolver, inscriptionResolver,];