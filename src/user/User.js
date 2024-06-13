import Config from '../config.js';


class User {

    id = null;
    name = '';
    email = '';
    role = null;
    permissions = [];

    // Ассоциация названия роли пришедшей с сервера с ролью используемой в приложении
    // Для исключения несоответсвия названий если роль поменяется на сервере
    // {servername: appname}
    #roles = {
        employee: 'employee',  
        dealer: 'dealer'
    }

    constructor(user) {
        if (!user) throw new Error("[User.setUser] Invalid user");
        if (!user.role) throw new Error("[User.setUser] Invalid user role");
        if (!this.#roles[user.role]) throw new Error("[User.setUser] Invalid set user role");

        this.id = user.id || '';
        this.name = user.name || '';
        this.email = user.email || '';
        this.role = this.#roles[user.role];
        this.permissions = user.permissions || [];
    }

    getRole() {
        return this.role;
    }
}

const user = new User(Config.user);
// const user = new User();
// const userdata = await fetchUserData().then((response) => {
//     user.setUser(response);
// }); 

export default user;
