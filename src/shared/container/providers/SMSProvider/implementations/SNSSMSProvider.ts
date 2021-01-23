import { SNS, AWSError } from 'aws-sdk';
import ISendSMSDTO from '../dtos/ISendSMSDTO';
import ISMSProvider from '../models/ISMSProvider';

export default class SNSSMSProvider implements ISMSProvider {
  private sns;

  constructor() {
    this.sns = new SNS({
      region: 'us-east-1',
      credentials: {
        accessKeyId: String(process.env.AWS_ACCESS_KEY_ID),
        secretAccessKey: String(process.env.AWS_ACCESS_SECRET),
      },
    });
  }

  public async sendSMS({ message, phone }: ISendSMSDTO): Promise<void> {
    const params = {
      Message: message,
      PhoneNumber: phone,
    };

    await this.sns
      .publish(params)
      .promise()
      .then((data: SNS.PublishResponse) => {
        console.log('Message published, message Id: ', data.MessageId);
      })
      .catch((err: AWSError) => {
        console.log(err, err.stack);
      });
  }
}
