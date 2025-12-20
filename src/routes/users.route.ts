import { Router } from "express";
import { createUserController } from "../controllers/createUser.controller.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const userRoutes = Router();

userRoutes.post('/', asyncHandler(createUserController))

export default userRoutes;