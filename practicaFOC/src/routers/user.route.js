const { Router } = require('express');
const { UserController } = require ('../controllers/user.controller');
const { UserValidator } = require('../validators/user.validator');
const { validarFields } = require('../middleware/validate-fields.middleware');


const router = Router();
const user_controller = new UserController()
const user_validator = new UserValidator()

router.get(
    '/',
    user_controller.getAll);
    module.exports = router;

    router.get(
        '/:id',
        user_controller.getOne);
    router.post(
        `/`,
        user_validator.validateUser,
        validarFields,

        user_controller.created)
    router.put(
        `/:id`,
        user_controller.update);
    router.delete(
        `/:id`,
        user_controller.deleted);
 
    module.exports = router;
    module.exports = router;