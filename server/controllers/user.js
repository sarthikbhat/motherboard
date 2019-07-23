const UserModel = require('../models/user');
const constants = require('../config/constants');
const {filteredBody} = require('../utils/filterBody');


module.exports = {
    async createUser(req,res,next){
        console.log(req.body);
        let body = filteredBody(req.body,constants.WHITELIST.users.register);
        console.log(body);
        let user = await UserModel.createUser(body);
        console.log(user);
    } 
};