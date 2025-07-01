import { Router } from 'express';

import AuthController from './src/controllers/AuthController';
import { AuthMiddleware } from './src/middlewares/AuthMiddleware';
import AuthorizationMiddleware from './src/middlewares/AuthorizationMiddleware';

const router = Router();

const authController = new AuthController();

router.post('/auth', authController.execute);
router.post('/auth/refresh-token', authController.refleshToken);

router.get('/admin/users', AuthMiddleware, authController.get);
router.get('/admin/users/:id', AuthMiddleware, () => {});

router.get('/admin/project', AuthMiddleware, AuthorizationMiddleware('project', ['getAll', 'delete']), () => console.log('Acabou a requisicao'))

export default router;

