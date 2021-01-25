import { container } from 'tsyringe';

import '@modules/users/providers';

import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import ISMSProvider from './providers/SMSProvider/models/ISMSProvider';
import SNSSMSProvider from './providers/SMSProvider/implementations/SNSSMSProvider';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<ISMSProvider>('SMSProvider', SNSSMSProvider);
