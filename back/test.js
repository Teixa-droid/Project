import { types } from './graphql/types.js';
import { resolvers } from './graphql/resolvers.js';
import { gql } from 'apollo-server-express';
import { ApolloServer } from 'apollo-server-express';
import DBconect from './db/db.js';
import dotenv from 'dotenv';
import assert from 'assert';

dotenv.config();
await DBconect();

const server = new ApolloServer({
  typeDefs: types,
  resolvers: resolvers,
});

it('creates user', async () => {
  const result = await server.executeOperation({
    query: gql`
      mutation Mutation(
        $name: String!
        $lastname: String!
        $identification: String!
        $email: String!
        $rol: Enum_Rol!
        $password: String!
      ) {
        createUser(
          name: $name
          lastname: $lastname
          identification: $identification
          email: $email
          rol: $rol
          password: $password
        ) {
          email
        }
      }
    `,
    variables: {
      name: 'Daniel',
      lastname: 'Sousa',
      identification: '121234',
      email: 'test@test.com',
      rol: 'ADMINISTRADOR',
      password: '1234',
    },
  });

  assert.equal(result.data.createUser.email, 'test@test.com');
});

it('fetches user', async () => {
  const result = await server.executeOperation({
    query: gql`
      query Users($filter: filterUsers) {
        Users(filter: $filter) {
          email
        }
      }
    `,
    variables: {
      filter: {
        email: 'test@test.com',
      },
    },
  });

  assert.equal(result.data.Users.length, 1);

  assert.equal(result.data.Users[0].email, 'test@test.com');
});

it('deletes user', async () => {
  const result = await server.executeOperation({
    query: gql`
      mutation deleteUser($email: String) {
        deleteUser(email: $email) {
          email
        }
      }
    `,
    variables: {
      email: 'test@test.com',
    },
  });
  assert.equal(result.data.deleteUser.email, 'test@test.com');
});

it('fetches user after deletion', async () => {
  const result = await server.executeOperation({
    query: gql`
      query Users($filter: filterUsers) {
        Users(filter: $filter) {
          email
        }
      }
    `,
    variables: {
      filter: {
        email: 'test@test.com',
      },
    },
  });

  assert.equal(result.data.Users.length, 0);
});