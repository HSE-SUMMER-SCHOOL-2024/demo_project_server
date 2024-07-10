const {validationResult} = require("express-validator");
const ApiError = require("../Error/index");

class UserController {

    async signUp(req, res, next) {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()) return next(ApiError.badRequest(JSON.stringify(errors.mapped())));



            res.status(200).json({});
        }
        catch (e) {
            next(e);
        }
    }

}

module.exports = new UserController();