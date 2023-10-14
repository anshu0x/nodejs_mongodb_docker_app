import { validationResult } from "express-validator";
import { NextFunction, Request, Response } from "express";

export default function ValidateReq(req: Request, res: Response, next: NextFunction) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    } catch (error) {
        return res.status(400).json({ errors: error });
    }
}