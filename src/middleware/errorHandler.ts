import type { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import { ApiError } from "../types/Errors.js";

class ErrorHandler {
    public isTrustedError = (err: Error) => {
        if (err instanceof ApiError){
            return err.isOperational
        }
        return false
    }

    public handleError = (err: Error) => {
        console.log('Error Logging: FIXME')
    }
}

const errorHandler = new ErrorHandler()

export const errorMiddleware: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    if (!errorHandler.isTrustedError(err)){
        next(err)
    }
    errorHandler.handleError(err)
}
