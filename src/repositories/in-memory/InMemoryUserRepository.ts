import { User } from "../../models/User";

class InMemoryUserRepository {
    
    private _users: User[];

    constructor () {
        this._users = [
            {   
                id: 'c226cba2-7afe-4446-82c1-2311481b7cab',
                name: 'Marciano',
                email: 'marciano@gmail.com',
                phone: '51 98989898',
                password: '$2b$10$1W8trKj4tjTD7.qQ1jsfluqi.YJeQLayNJaKzv88X3Lmygsf58bUG',
                user_group: 2
            },
            {
                id: '550725e3-b736-49c6-b268-a57baee99ffc',
                name: 'Billy',
                email: 'billy@gmail.com',
                phone: '51 98989898',
                password: '$2b$10$1W8trKj4tjTD7.qQ1jsfluqi.YJeQLayNJaKzv88X3Lmygsf58bUG',
                user_group: 2
            },
                        {
                id: 'dc282686-7335-410c-a92a-3f436b97b8a1',
                name: 'Ana',
                email: 'ana@gmail.com',
                phone: '51 98989898',
                password: '$2b$10$1W8trKj4tjTD7.qQ1jsfluqi.YJeQLayNJaKzv88X3Lmygsf58bUG',
                user_group: 1
            }
        ]
    }

    async getByEmail(email: string): Promise<User> {
        const user = this._users.filter(user => user.email === email);
        return user[0];
    }

    getById(id: string){
        let user = {};
        this._users.map((item) => {
            if(item.id === id) {
                user = item;
            }
        })

        return user;
    }

}

export default InMemoryUserRepository;