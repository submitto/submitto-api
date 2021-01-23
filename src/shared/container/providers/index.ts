import { container } from 'tsyringe';
import SNSSMSProvider from './SMSProvider/implementations/SNSSMSProvider';
import ISMSProvider from './SMSProvider/models/ISMSProvider';

container.registerSingleton<ISMSProvider>('SMSProvider', SNSSMSProvider);
