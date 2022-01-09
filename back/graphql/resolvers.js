import { projectResolvers } from "../models/Project/resolver.js";
import { userResolvers } from "../models/User/resolver.js";
import { advanceResolver } from "../models/Advance/resolver.js";
import { inscriptionResolver } from "../models/Inscription/resolver.js";
import { resolversAuthentication } from "./auth/resolvers.js";

export const resolvers = [
    userResolvers,
    projectResolvers,
    advanceResolver,
    inscriptionResolver,
    resolversAuthentication,
];