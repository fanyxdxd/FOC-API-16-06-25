const {body} = require("express-validator")

class UserValidator {
    constructor(){

    }

    validateUser = [
        body("name").notEmpty().withMessage("Name is required"),
        body("name").isString().withMessage("Name must be string"),
        body("email").notEmpty().withMessage("Email is required"),
        body("email").isEmail().withMessage("Email format incorrect"),
        body("password").notEmpty().withMessage("Passowrd is required"),
        body("password").isString().withMessage("Passowrd must be string"),
        body("role_id").notEmpty().withMessage("Role id is required"),
        body("role_id").isNumeric().withMessage("Role Id must be numeric"),
    ]
}

module.exports = {
    UserValidator
}