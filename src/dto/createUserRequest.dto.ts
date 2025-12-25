import type { UserRoles } from "../constants/userRoles.js";

export interface CreateUserRequestDto {
    name: string;
    email: string;
    password: string;
    role: UserRoles;
}