import { Router } from 'express';
import KeyController from '../controllers/KeyController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const keyRouter = Router();
const keyController = new KeyController();

keyRouter.use(ensureAuthenticated);

keyRouter.get('/', keyController.show);

export default keyRouter;
