import { Request, Response } from "express";
import User from "../models/User";
import CheckReqBody from "../utils/User.utils";

export default class UserController {
    static registerUser = async (req: Request, res: Response) => {
        CheckReqBody(req, res)
        const { username, password } = req.body;
        const isUserExist = await User.findOne({ username });
        if (isUserExist) {
            return res.status(403).json({
                errors: "User Already Exists !"
            })
        }
        await User.create({
            username,
            password
        })
        res.status(200).json({
            message: "Successfully Registered !"
        })
    }
    static loginUser = async (req: Request, res: Response) => {
        CheckReqBody(req, res)
        const { username, password } = req.body;
        const isUserExist = await User.findOne({ username });
        if (!isUserExist) {
            return res.status(404).json({
                error: "User not found !"
            })
        }
        else {
            if (isUserExist.password !== password) {
                return res.status(401).json({
                    errors: "Please enter valid credentials !"
                })
            }
            return res.status(200).json({
                message: "Successfully LoggedIn !"
            })
        }
    }
}