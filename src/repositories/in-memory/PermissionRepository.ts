import { Permission } from "../../models/Permissions";

class PermissionRepository {

    private permissions: Permission[];

    constructor() {
        
        this.permissions = [
            {
                id: 5,
                user_group: 1,
                domain: 'project',
                permissions: ['getAll', 'getById', 'add', 'update', 'delete']
            },
                        {
                id: 9,
                user_group: 2,
                domain: 'project',
                permissions: ['getAll', 'getById', 'add', 'update']
            }
        ]

    }

    getAll(){
        return this.permissions;
    }

    getById(){
        
    }

}


export default PermissionRepository;


