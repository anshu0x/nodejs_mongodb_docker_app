import { body } from 'express-validator';

export const USER_VALIDATION = [
    body("username").notEmpty()
        .withMessage("Username is required!"),
    body("password").notEmpty()
        .withMessage("Password is required!"),
];
