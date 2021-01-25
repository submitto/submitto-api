import FakeSMSProvider from '@shared/container/providers/SMSProvider/fakes/FakeSMSProvider';
import SendSMSService from './SendSMSService';

let fakeSMSProvider: FakeSMSProvider;
let sendSMS: SendSMSService;

describe('SendSMS', () => {
  beforeEach(() => {
    fakeSMSProvider = new FakeSMSProvider();
    sendSMS = new SendSMSService(fakeSMSProvider);
  });

  it('should be able to ssend a new message', async () => {
    const sms = jest.spyOn(fakeSMSProvider, 'sendSMS');

    await sendSMS.execute({
      message: 'hello world',
      phone: '+5561982656044',
    });

    expect(sms).toHaveBeenCalled();
  });
});
