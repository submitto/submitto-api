import { Request, Response } from 'express';
import SendSMSService from '@modules/sms/services/SendSMSService';
import { container } from 'tsyringe';

export default class SMSController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { message, phone } = request.body;

    const sms = container.resolve(SendSMSService);

    await sms.execute({
      message,
      phone,
    });

    return response.status(204).json();
  }
}
