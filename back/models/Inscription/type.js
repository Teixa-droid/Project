import { gql } from "apollo-server-express";

const inscriptionTypes = gql` 
type Inscription{
    _id: ID!
    status: Enum_InscriptionState!
    ticketentry: Date!
    ticketegress: Date!
    project: Project!
    student: User!
}

type Query{
    Inscriptions: [Inscription]
}

type Mutation{
    createInscription(project: String!, student: String!): Inscription

    approveRegistration(id:String!): Inscription
    
}
`;

export { inscriptionTypes };