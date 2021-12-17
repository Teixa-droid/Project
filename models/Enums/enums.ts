enum Enum_Rol {
    STUDENT = 'STUDENT',
    LEADER = 'LEADER',
    ADMINISTRATOR = 'ADMINISTRATOR',
}
enum Enum_UserState {
    PENDING = 'PENDING',
    AUTHORIZED = 'AUTHORIZED',
    UNAUTHORIZED = 'UNAUTHORIZED',
}
enum Enum_ProjectState {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE",
}
enum Enum_ProjectStep {
    STARTED = 'STARTED',
    DEVELOPING = 'DEVELOPING',
    FINISHED = 'FINISHED',
    NULL = '',
}
enum Enum_ObjectiveType {
    GENERAL = 'GENERAL',
    SPICIFIC = 'SPICIFIC',
}

enum Enum_InscriptionState {
    accepted = 'Accepted',
    rejected = 'Rejected',
}

export { Enum_Rol, Enum_UserState, Enum_ProjectState, Enum_ProjectStep, Enum_ObjectiveType, Enum_InscriptionState };