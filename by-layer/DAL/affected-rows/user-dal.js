module.exports = class UserDAL{
    updateUser(user){
        return 1;
    }

    saveUser(user){
        user.id = Math.ceil(Math.random()*10000);
        return user;
    }
}