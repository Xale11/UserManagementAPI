import type { CreateUserRequestDto } from "../dto/createUserRequest.dto.js"
import type { UserResponseDto } from "../dto/userResponse.dto.js"
import { v4 as uuidv4 } from "uuid"

export class UserRepository {
    createUser = async (user: CreateUserRequestDto): Promise<UserResponseDto> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    createdAt: Date.now().toString(),
                    email: user.email,
                    name: user.name,
                    id: uuidv4()
                })
            }, 500)
        })
    }
}