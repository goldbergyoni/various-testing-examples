class DAL{
    constructor(){
        this.mongoDB = mongo.db(config.DBConnectionString);
    }
    
    updateUsername(userEmail, newUserName){
        return await mongoDB.update({email:userEmail, username:newUserName});
    }
}