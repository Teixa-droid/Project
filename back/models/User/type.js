import { gql } from 'apollo-server-express';

const userTypes = gql`
type User {
    _id: ID!
    name: String!
    lastname: String!
    identification: String!
    email: String!
    rol: Enum_Rol!
    state: Enum_UserState
    inscriptions: [Inscription]
    advanceCreated: [Advance]
    projectsFront: [Project]
}

type Query {
    Users: [User]
    User(_id: String!): User
  }

type Mutation {
  createUser(
    name: String!
    lastname: String!
    identification: String!
    email: String!
    rol: Enum_Rol!
    state: Enum_UserState
    password: String!
  ): User

  editUser(
    _id: String!
    name: String!
    lastname: String!
    identification: String!
    email: String!
    state: Enum_UserState
    password: String!
  ): User

  deleteUser(_id: String!, email: String): User

}
`;

export { userTypes };