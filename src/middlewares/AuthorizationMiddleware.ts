import { NextFunction, Request, Response } from "express";

const AuthorizationMiddleware = (domain: string, permissions: string[]) => {
    return (Req: Request, Res: Response, Next: NextFunction) => {
        console.log('Authorization Middleware');

        console.log(Req.body.id);

        Next()
    }
}


export default AuthorizationMiddleware;