import { gql } from "apollo-server-express";

const authenticationTypes = gql`

type Token {
    token: String
    error: String
}

type Mutation {
    registration(
        name: String!
        lastname: String!
        identification: String!
        email: String!
        rol: Enum_Rol!
        state: Enum_UserState
        password: String!
    ): Token!
    login(
        email:String,
        password:String!
    ):Token

    validateToken: Token
}
`;

export {authenticationTypes};