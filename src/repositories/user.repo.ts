import type { CreateUserRequestDto } from "../dto/createUserRequest.dto.js"
import type { UserResponseDto } from "../dto/userResponse.dto.js"
import { v4 as uuidv4 } from "uuid"

export class UserRepository {

    private users: UserResponseDto[] = []

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

    public getUsers = async (): Promise<UserResponseDto[] | void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.users)
            }, 500)
        })
    }
}