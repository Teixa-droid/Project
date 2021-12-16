import { gql } from "apollo-server-express";

const typeDefs = gql`
scalar Date

enum Enum_UserState{
  PENDING
  AUTHORIZED
  UNAUTHORIZED
}

enum Enum_Rol{
  STUDENT
  LEADER
  ADMINISTRATOR
}

enum Enum_ProjectState {
  ACTIVE
  INACTIVE
}

enum Enum_ObjectiveType {
  GENERAL
  SPICIFIC
}

enum Enum_ProjectStep {
  STARTED
  DEVELOPING
  FINISHED
  NULL
}

type User {
    _id: ID!
    name: String!
    lastname: String!
    identification: String!
    email: String!
    state: Enum_UserState
    rol: Enum_Rol!
}

type Objective{
  _id: ID!
  description: String!
  type: Enum_ObjectiveType!
  
}

input createObjective {
  description: String!
  type: Enum_ObjectiveType! 
}
type Project{
  _id: ID!
  name: String!
  assumption: Float!
  startdate: Date!
  enddate: Date!
  status: Enum_ProjectState!
  step: Enum_ProjectStep!
  leader: User!
  objectives: [Objective]
}
type Query {
    Users: [User]
    User(_id:String!): User
    Projects: [Project]
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

  createProject(
    name: String!
    assumption: Float!
    startdate: Date!
    enddate: Date!
    status: Enum_ProjectState!
    step: Enum_ProjectStep!
    leader: String! 
    objectives: [createObjective]
    ): Project
}
`;

export { typeDefs };