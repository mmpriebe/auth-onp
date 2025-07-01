import jwt, { SignOptions } from 'jsonwebtoken';

export const generateAuthToken = (payload: any, expiresIn: string | number): string => {

    const options: SignOptions = {
        expiresIn: (expiresIn || '1h') as SignOptions['expiresIn']
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, options);

    return token;
}

export const decodeJWT = (token: string): any => {
    const payloadToken = jwt.decode(token);
    return payloadToken;
}

export const verifyJWT = (jwt_token: string): boolean => {

    try {
        const verify = jwt.verify(jwt_token, process.env.JWT_SECRET as string);
        return true;

    } catch (err: any) {
        return false
    }

}