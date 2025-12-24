import type { NextFunction, Request, Response } from "express"
import { UserService } from "../services/users.service.js"

export const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
    const page = parseInt(req.query.page as string)
    const limit = parseInt(req.query.limit as string)

    const userService = new UserService()
    const data = await userService.getUsers(page, limit)
    res.status(200).json(data)
}