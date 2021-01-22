import IMessagesRepository from '@modules/messages/repositories/IMessagesRepository';
import { getMongoRepository, MongoRepository } from 'typeorm';
import Message from '../schemas/Message';
import ICreateMessageDTO from '../../../dtos/ICreateMessageDTO';

export default class MessagesRepository implements IMessagesRepository {
  private ormRepository: MongoRepository<Message>;

  constructor() {
    this.ormRepository = getMongoRepository(Message, 'mongo');
  }

  public async create({
    from,
    to,
    body,
    recipient_id,
  }: ICreateMessageDTO): Promise<Message> {
    const message = this.ormRepository.create({ from, to, body, recipient_id });

    await this.ormRepository.save(message);

    return message;
  }
}
