import type { CreateUserRequestDto } from "../dto/createUserRequest.dto.js"
import type { UserResponseDto } from "../dto/userResponse.dto.js"
import { v4 as uuidv4 } from "uuid"
import { testUsers } from "../constants/testUsers.js"

export class UserRepository {

    private users: UserResponseDto[] = testUsers

    public createUser = async (user: CreateUserRequestDto): Promise<UserResponseDto | void> => {
        const newUser: UserResponseDto = {
            createdAt: Date.now().toString(),
            email: user.email,
            name: user.name,
            id: uuidv4()
        }

        this.users.push(newUser)

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(newUser)
            }, 500)
        })
    }

    public getUsers = async (page: number = 1, limit: number = 10): Promise<UserResponseDto[] | void> => {
        const rangeStart = (page - 1) * limit
        const rangeEnd = (page * limit)
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.users.slice(rangeStart, rangeEnd))
            }, 500)
        })
    }
}