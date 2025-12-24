import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getUsersController } from "../controllers/getUsers.controller.js";
import { createUserSchema } from "../validators/schemas/CreateUserSchema.js";
import { validate } from "../validators/validate.js";

const userRoutes = Router();

userRoutes.post('/', validate(createUserSchema), asyncHandler(createUserController))
userRoutes.get('/', asyncHandler(getUsersController))

export default userRoutes;