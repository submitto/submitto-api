import 'reflect-metadata';

import { inject, injectable } from 'tsyringe';

import ISMSProvider from '@shared/container/providers/SMSProvider/models/ISMSProvider';

interface IRequest {
  message: string;

  phone: string;
}

@injectable()
class SendSMSService {
  constructor(
    @inject('SMSProvider')
    private smsProvider: ISMSProvider,
  ) {}

  public async execute({ phone, message }: IRequest): Promise<void> {
    await this.smsProvider.sendSMS({
      message,
      phone,
    });
  }
}

export default SendSMSService;
