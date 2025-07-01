import { UserGroup } from "../../models/UserGroup";


class UserGroupRepository {

    private userGroups: UserGroup[];

    constructor() {
        this.userGroups = [
            {id: 1, name: 'Administrador'},
            {id: 2, name: 'Funcionario'}
        ]
    }

    getAll(){
        return this.userGroups;
    }

    getById(){
        
    }

}


export default UserGroupRepository;


