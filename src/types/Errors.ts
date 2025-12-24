import { HttpStatusCode } from "../constants/httpStatusCodes.js"

export class ApiError extends Error {

    public httpCode: HttpStatusCode
    public isOperational: boolean
    public description: string

    constructor(name: string, httpCode: HttpStatusCode, isOperational: boolean, description: string = ""){
        super(name)
        this.httpCode = httpCode
        this.isOperational = isOperational
        this.description = description

        Error.captureStackTrace(this)
    }
}
