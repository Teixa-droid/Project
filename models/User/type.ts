import { gql } from "apollo-server-express";

const userTypes = gql`


type User {
    _id: ID!
    name: String!
    lastname: String!
    identification: String!
    email: String!
    state: Enum_UserState
    rol: Enum_Rol!
}

type Query {
    Users: [User]
    User(_id:String!): User
  }

type Mutation {
  createUser(
    name: String!
    lastname: String!
    identification: String!
    email: String!
    state: Enum_UserState
    rol: Enum_Rol!
  ): User

  editUser(
    _id: String!
    name: String!
    lastname: String!
    identification: String!
    email: String!
    state: Enum_UserState
    rol: Enum_Rol!
  ): User

  deleteUser(_id: String!, email: String): User

}
`;

export { userTypes };