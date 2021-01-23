import ISendSMSDTO from '../dtos/ISendSMSDTO';
import ISMSProvider from '../models/ISMSProvider';

export default class FakeSMSProvider implements ISMSProvider {
  private messages: ISendSMSDTO[] = [];

  public async sendSMS(message: ISendSMSDTO): Promise<void> {
    this.messages.push(message);
  }
}
