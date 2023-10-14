import express from "express";
import UserController from "../controller/User.controller";
import { USER_VALIDATION } from "../validation/User.validation";

const UsersRouter = express.Router()

UsersRouter.post("/register", USER_VALIDATION, UserController.registerUser)

UsersRouter.post("/login", USER_VALIDATION, UserController.loginUser)


export default UsersRouter 