const { Router } = require('express');
const { RoleController } = require ('../controllers/role.controller');
const { RoleValidator } = require('../validators/role.validator');
const { validarFields } = require('../middleware/validate-fields.middleware');

const router = Router();
const role_controller = new RoleController()
const role_validator = new RoleValidator()
router.get(
    '/',
    role_controller.getAll);
    module.exports = router;

    router.get(
        '/:id',
        role_controller.getOne);
    router.post(
        `/`,
        role_validator.validateRole,
        validarFields,
        role_controller.created)
    router.put(
        `/:id`,
        role_controller.update);
    router.delete(
        `/:id`,
        role_controller.deleted);
 
    module.exports = router;
    module.exports = router;

