import { Request, Response } from "express";
import { responseHandler } from "../../utils/responseHandler";

const handleLogin = async (req: Request, res: Response) => {
    try {
        // login logic goes here 
        console.log("Login logic here")
    } catch (error) {
        return responseHandler(res, true, "Error while login", null, 500);
    }
}

export default handleLogin;