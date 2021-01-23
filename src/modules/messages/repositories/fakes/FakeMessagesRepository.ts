import ICreateMessageDTO from '@modules/messages/dtos/ICreateMessageDTO';
import Message from '@modules/messages/infra/typeorm/schemas/Message';
import { uuid } from 'uuidv4';
import IMessagesRepository from '../IMessagesRepository';

export default class FakeMessagesRepository implements IMessagesRepository {
  private messages: Message[] = [];

  public async create({
    from,
    to,
    body,
    recipient_id,
  }: ICreateMessageDTO): Promise<Message> {
    const message = new Message();

    Object.assign(message, {
      id: uuid(),
      from,
      to,
      body,
      recipient_id,
    });

    this.messages.push(message);

    return message;
  }
}
