import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { RefreshTokenInterface } from "../schemas/AuthSchema";
import { AuthInterface, executeAuthSchema, refreshTokenSchema } from "../schemas/AuthSchema";

class AuthController {

    async execute(Req: Request, Res: Response) {
        try {

            const authService = new AuthService();

            const dadosValidados: AuthInterface  = await executeAuthSchema.validate(Req.body, {stripUnknown: true})
            
            const resultadoAutenticacao = await authService.execute(dadosValidados);

            console.log(resultadoAutenticacao);
            
            Res.json(resultadoAutenticacao);

        } catch (err: any) {

            Res.status(400).json({ error: err.message});

        }
    }
    
    async refleshToken(Req: Request, Res: Response) {
        try {
            const authService = new AuthService();
            
            const dadosValidados: RefreshTokenInterface = await refreshTokenSchema.validate(Req.body, {stripUnknown: true});

            const resultadoRefresh = await authService.refreshToken(dadosValidados);  

            Res.json(resultadoRefresh);

        } catch (err: any) {
            Res.status(400).json({ error: err.message });
        }
    }

    async get(Req: Request, Res: Response) {
        Res.json({success: true});
    }
}


export default AuthController;