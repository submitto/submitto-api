import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import smsRouter from '@modules/sms/infra/http/routes/sms.routes';
import keyRouter from '@modules/users/infra/http/routes/key.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/profile', profileRouter);
routes.use('/sms', smsRouter);
routes.use('/key', keyRouter);

export default routes;
