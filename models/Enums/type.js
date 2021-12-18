import { gql } from "apollo-server-express";

const enumsTypes = gql`

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

enum Enum_InscriptionState {
  ACCEPTED
  REJECTED
  PENDING
}

`;

export { enumsTypes };