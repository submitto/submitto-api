import IMessagesRepository from '@modules/messages/repositories/IMessagesRepository';
import { getMongoRepository, MongoRepository } from 'typeorm';
import SMS from '../schemas/SMS';

export default class SMSRepository implements SMSRepository {
  private ormRepository: MongoRepository<SMS>;

  constructor() {
    this.ormRepository = getMongoRepository(SMS, 'mongo');
  }

  public async create({ message, phone }: ICreateMessageDTO): Promise<SMS> {
    const sms = this.ormRepository.create({message, phone});

    await this.ormRepository.save(sms);

    return sms;
  }
}
