import { body, check, param } from 'express-validator';
export const validateItem = [
    body('name')
        .isString()
        .withMessage('Name must be a string')
        .notEmpty()
        .withMessage('Name is required'),
    body('price')
        .isNumeric()
        .withMessage('Price must be a number')
        .custom((value) => value > 0)
        .withMessage('Price must be greater than zero'),
    body('category')
        .isString()
        .withMessage('Category must be a string')
        .notEmpty()
        .withMessage('Category is required'),
];
export const validateItemId = [
    param('id')
        .isMongoId()
        .withMessage('Invalid item ID'),
];
export const validateQuery = [
    check('query')
        .isString()
        .optional()
        .withMessage('Query must be a string'),
];
//# sourceMappingURL=itemValidator.js.map