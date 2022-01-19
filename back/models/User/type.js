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
    picture: String
    inscriptions: [Inscription]
    advanceCreated: [Advance]
    projectsFront: [Project]
}

input FilterUser{
    _id: ID
    identification: String
    email: String
    rol: Enum_Rol
    state: Enum_UserState
}

input EditProfileFilter {
    name: String
    lastname: String
    identification: String
    picture: String
  }

type Query {
    Users(filter: FilterUser): [User]
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

  editProfile(_id: String!, fields: EditProfileFilter!): User

  deleteUser(_id: String!, email: String): User

}
`;

export { userTypes };