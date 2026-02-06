export enum UserRole {
    ADMIN = 'admin',
    USER = 'user'
}

export enum UserRoleId {
    ADMIN = 1,
    USER = 2
}

export const roleToRoleIdMap: Record<UserRole, UserRoleId> = {
  [UserRole.ADMIN]: UserRoleId.ADMIN,
  [UserRole.USER]: UserRoleId.USER
};

export const roleIdToRoleMap: Record<UserRoleId, UserRole> = {
  [UserRoleId.ADMIN]: UserRole.ADMIN,
  [UserRoleId.USER]: UserRole.USER
};