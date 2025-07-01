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

    getById(id: number){
        let result = {};
        this.userGroups.map((item) => {
            if(item.id === id) {
                result = id;
            }
        })

        return result;
    }

}


export default UserGroupRepository;


