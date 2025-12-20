import type { NextFunction, Request, Response } from "express";
import type { CreateUserRequestDto } from "../dto/createUserRequest.dto.js";
import { UserService } from "../services/users.service.js";

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    const data: CreateUserRequestDto = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
    }

    const userService = new UserService()

    return await userService.createUser(data)
}