import { NextFunction, Request, Response } from "express";
import PermissionRepository from "../repositories/in-memory/PermissionRepository";
import UserGroupRepository from "../repositories/in-memory/UserGroupRepository";
import InMemoryUserRepository from "../repositories/in-memory/InMemoryUserRepository";


const permissionRepository = new PermissionRepository();
const userGroupRepository = new UserGroupRepository();
const inMemoryUserRepository = new InMemoryUserRepository();

const AuthorizationMiddleware = (domain: string, permissions: string[]) => {
    return (Req: Request, Res: Response, Next: NextFunction) => {
        console.log('Authorization Middleware');

        const id_user = Req.body.id;

        const dataUser: any = inMemoryUserRepository.getById(id_user)
        // const dataUserGroup: any = userGroupRepository.getById(dataUser.user_group)
        const dataPermission: any = permissionRepository.getPermissions(dataUser.user_group, domain);

        // const isInArray = permissions.some(item => dataPermission.permissions.includes(item));

        let contain = true;

        permissions.map((item) => {
            if(!dataPermission.permissions.includes(item)){
                contain = false
            } 
        })

        if(contain) {
            Next();
        } else {
            Res.json({error: 'Unauthorized'}).status(401);
        }

    }
}


export default AuthorizationMiddleware;