import bcrypt from 'bcrypt';
import { decodeJWT, generateAuthToken, verifyJWT } from './helper/AuthHelper';
import { AuthInterface, RefreshTokenInterface } from "../schemas/AuthSchema";
import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";



class AuthService {

    async execute(dadosValidados: AuthInterface) {
        const inMemoryUserRepository = new InMemoryUserRepository;
        const dataUser = await inMemoryUserRepository.getByEmail(dadosValidados.email);
        const ifPasswordCorrect = await bcrypt.compare(dadosValidados.password, dataUser.password);
        
        
        if (!dataUser) {
            throw new Error('Email e/ou senha inválidos');
        }
        
        if (!ifPasswordCorrect) {
            throw new Error('Email e/ou senha inválidos');
        }
        
        const token = generateAuthToken(dataUser, process.env.JWT_EXPIRES_IN as string);
        const refresh_token = generateAuthToken(dataUser, process.env.JWT_REFRESH_EXPIRES_IN as string);
        return {token, refresh_token}
    }

    async refreshToken(dadosValidados: RefreshTokenInterface) {

        const verifyToken = verifyJWT(dadosValidados.token);
        const verifyRefreshToken = verifyJWT(dadosValidados.refresh_token);

        if (!verifyToken && !verifyRefreshToken) {
            throw new Error('Token e Refresh Token inválidos!');
        }

        const { id, name, email, phone, password, user_group } = decodeJWT(dadosValidados.refresh_token);
        const payloadJWT = { id, name, email, phone, password, user_group }

        const token = generateAuthToken(payloadJWT, process.env.JWT_EXPIRES_IN as string);
        const refresh_token = generateAuthToken(payloadJWT, process.env.JWT_REFRESH_EXPIRES_IN as string);
        
        console.log(token, refresh_token)
        return {token, refresh_token}
    
    }

}

export default AuthService;