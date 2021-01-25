import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import SMSController from '../controllers/SMSController';

const smsRouter = Router();
const smsController = new SMSController();

smsRouter.use(ensureAuthenticated);

smsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      message: Joi.string().required(),
      phone: Joi.string()
        .regex(/^\+\d{2}\d{2}\d{9}$/)
        .required(),
    },
  }),
  smsController.create,
);

export default smsRouter;
