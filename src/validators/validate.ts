import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";
import { HttpStatusCode } from "../constants/httpStatusCodes.js";
import { ZodError } from "zod";

export const validate = ( schemaBody?: ZodObject, schemaParams?: ZodObject, schemaQuery?: ZodObject ) => ( req: Request, res: Response, next: NextFunction ) => {
    try {
        if (schemaBody) {
        schemaBody.parse(req.body);
      }

      if (schemaParams) {
        schemaParams.parse(req.params);
      }

      if (schemaQuery) {
        schemaQuery.parse(req.query);
      }

      return next();
    } catch (err) {

        if (err instanceof ZodError){
            res.status(HttpStatusCode.BAD_REQUEST).json({
                message: "Validation failed",
                errors: err
            })
        }

        return res.status(HttpStatusCode.INTERNAL_SERVER).json({
            message: "Unexpected error"
        });
    }
}