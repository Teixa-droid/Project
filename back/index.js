import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { types } from './graphql/types.js'
import { resolvers } from './graphql/resolvers.js';
import DBconect from "./db/db.js";
import { validateToken } from './utils/tokenUtils.js';

dotenv.config();

const getUserData = (token) => {
    const verification = validateToken(token.split(' ')[1]);
    if (verification.data) {
        return verification.data;
    } else {
        return null;
    }
};

const server = new ApolloServer({
    typeDefs: types,
    resolvers: resolvers,
    context: ({ req }) => {
        const token = req.headers?.authorization ?? null;
        if (token) {
            const userData = getUserData(token);
            if (userData) {
                return { userData };
            }
        }
    return null;
    },
});

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
    await DBconect();
    await server.start();

    server.applyMiddleware({ app });
    console.log('ok');
});


