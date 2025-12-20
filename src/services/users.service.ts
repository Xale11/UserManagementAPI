import type { CreateUserRequestDto } from "../dto/createUserRequest.dto.js";
import type { UserResponseDto } from "../dto/userResponse.dto.js";
import { UserRepository } from "../repositories/user.repo.js";

export class UserService {

    private userRepo = new UserRepository()

    createUser = async (user: CreateUserRequestDto): Promise<UserResponseDto> => {
        const newUser = await this.userRepo.createUser(user)
        if (!newUser) {
            throw Error('Failed to create new user')
        }
        return newUser
    } 
}