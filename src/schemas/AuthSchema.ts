import Yup, { object, string } from "yup";

export const executeAuthSchema = object().shape({
    password: string().min(8, 'As senhas tem no minimo 8 caracteres!').required(),
    email: string().email().required()
})

export const refreshTokenSchema = object().shape({
    token: string().required(),
    refresh_token: string().required()
})

export type AuthInterface = Yup.InferType<typeof executeAuthSchema>
export type RefreshTokenInterface = Yup.InferType<typeof refreshTokenSchema>