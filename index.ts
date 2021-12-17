import express from 'express';
import cors from 'cors';
import {ApolloServer} from 'apollo-server-express';
import dotenv from 'dotenv';
import {type} from './graphql/types'
import { resolver } from './graphql/resolvers';
import DBconect from "./db/db";
dotenv.config();

const server = new ApolloServer({
    typeDefs: type,
    resolvers: resolver,
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


