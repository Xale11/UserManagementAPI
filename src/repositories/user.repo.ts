import type { CreateUserRequestDto } from "../dto/createUserRequest.dto.js"
import type { UserResponseDto } from "../dto/userResponse.dto.js"
import { v4 as uuidv4 } from "uuid"
import { testUsers } from "../constants/testUsers.js"
import { db } from "../database/pgClient.js"
import type { QueryResult } from "pg"

export class UserRepository {

    private users: UserResponseDto[] = testUsers

    public createUser = async (user: CreateUserRequestDto): Promise<UserResponseDto | void> => {
        const client = await db.connect()
        try {
            const data = await client.query('INSERT INTO users (')
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