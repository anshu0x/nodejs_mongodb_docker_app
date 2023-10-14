import express from "express";
import UserController from "../controller/User.controller";
import { USER_VALIDATION } from "../validation/User.validation";
import ValidateReq from "../utils/User.utils";

const UsersRouter = express.Router()

UsersRouter.post("/register", USER_VALIDATION, ValidateReq, UserController.registerUser)

UsersRouter.post("/login", USER_VALIDATION, ValidateReq, UserController.loginUser)


export default UsersRouter 