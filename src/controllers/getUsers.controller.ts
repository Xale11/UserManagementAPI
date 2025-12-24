import type { NextFunction, Request, Response } from "express"
import { UserService } from "../services/users.service.js"

export const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
    const userService = new UserService()
    const data = await userService.getUsers()
    res.status(200).json(data)
}