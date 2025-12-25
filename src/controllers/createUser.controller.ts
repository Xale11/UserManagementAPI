import type { NextFunction, Request, Response } from "express";
import type { CreateUserRequestDto } from "../dto/createUserRequest.dto.js";
import { UserService } from "../services/users.service.js";

export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    const data: CreateUserRequestDto = {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password,
        role: req.body.role
    }

    const userService = new UserService()
    const newUser = await userService.createUser(data)
    
    res.status(201).json(newUser)
}