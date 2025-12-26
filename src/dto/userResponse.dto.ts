import type { UserRole } from "../constants/userRoles.js";

export interface UserResponseDto {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: string;
}