import { Router } from 'express';
import { register, login } from '../controllers/authController.js';
import { validateRequest } from '../middlewares/errorHandler.js';
import { validateUserRegistration, validateUserLogin } from '../validators/userValidator.js';
const authRoutes = Router();
authRoutes.post('/register', validateUserRegistration, validateRequest, register);
authRoutes.post('/login', validateUserLogin, validateRequest, login);
export default authRoutes;
//# sourceMappingURL=authRoutes.js.map