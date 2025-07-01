import { NextFunction, Request, Response } from "express";
import AuthService from "../services/AuthService";
import { decodeJWT } from "../services/helper/AuthHelper";

export const AuthMiddleware = async (Req: Request, Res: Response, Next: NextFunction) => {
    
    try {
        const authService = new AuthService();
    
        const { authorization, refresh_token } = Req.headers;

    if(authorization && refresh_token) {
        const tokens = await authService.refreshToken({token: authorization, refresh_token: refresh_token as string})
        
        Res.set('authorization', tokens.token);
        Res.set('refresh_token', tokens.refresh_token);

        const { id, user_group } = decodeJWT(tokens.token);
        const payload = { id, user_group };

        Req.body = payload;

        Next();
        return;
    }
    
        throw new Error('Authorization e refresh token são obrigatorios');
    
    } catch (err: any) {
        Res.status(400).json({error: err.message});
    }


}