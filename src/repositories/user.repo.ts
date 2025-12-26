import type { CreateUserRequestDto } from "../dto/createUserRequest.dto.js"
import type { UserResponseDto } from "../dto/userResponse.dto.js"
import { db } from "../database/pgClient.js"
import { roleToRoleIdMap } from "../constants/userRoles.js"

export class UserRepository {

    public createUser = async (user: CreateUserRequestDto): Promise<UserResponseDto | void> => {
        const client = await db.connect()

        const roleId = roleToRoleIdMap[user.role]

        const createUserQuery = `
            WITH new_user as (
                INSERT INTO users (name, email, password)
                VALUES ($1, $2, $3)
                RETURNING id, name, email, password, created_at
            ),
            insert_role as (
                INSERT INTO user_roles (user_id, role_id)
                SELECT id, $4
                FROM new_user
            )
            SELECT nu.id, nu.name, nu.email, nu.password, nu.created_at $5 AS role
            FROM new_user nu;
        `;

        try {
            const data = await client.query<UserResponseDto>(createUserQuery,
                [user.name, user.email, user.password, roleId, user.role]
            )
            return data.rows[0]
        } finally {
            client.release()
        }

        
    }

    public getUsers = async (page: number = 1, limit: number = 10): Promise<UserResponseDto[] | void> => {
        const offset = (page - 1) * limit;
        const client = await db.connect()

        try {
            const data = await client.query<UserResponseDto>(
                'SELECT * FROM users ORDER BY id LIMIT $1 OFFSET $2;',
                [limit, offset]
            );
            return data.rows
        } finally {
            client.release()
        }
    }
}