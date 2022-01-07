import { gql } from 'apollo-server-express';

const projectTypes = gql`

type Objective{
  _id: ID!
  description: String!
  type: Enum_ObjectiveType!
  
}

input createObjective {
  description: String!
  type: Enum_ObjectiveType! 
}

input objectiveFields{
  description: String! 
  type: Enum_ObjectiveType!
}

input projectFields{
  name: String
  assumption: Float
  startdate: Date
  enddate: Date
  status: Enum_ProjectState
  step: Enum_ProjectStep
  leader: String
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
  advances: [Advance]
  inscriptions: [Inscription]
}
type Query {
    Projects: [Project]
  }

type Mutation {
    
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

    editProject(_id:String!, fields: projectFields!): Project
    
    createObjective(idProject: String!, fields: objectiveFields!): Project

    editObjective(idProject: String!, indexObjective: Int!, fields: objectiveFields!): Project

    removeObjective(idProject: String!, idObjective: String!): Project
}
`;

export { projectTypes };