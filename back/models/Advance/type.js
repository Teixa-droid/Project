import { gql } from 'apollo-server-express';

const advanceType = gql`
type Advance{
    _id: ID!
    ticket: Date!
    discription: String!
    note: [String]
    project: Project!
    createdby: User!
}

type Query {
    Advances: [Advance]
    advancefilter(_id: String!): [Advance]
}
type Mutation {
    createAdvance(ticket: Date!, discription: String!, project: String!, createdby: String!): Advance
    }
`;
export { advanceType };
