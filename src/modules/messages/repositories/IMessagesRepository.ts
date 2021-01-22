import ICreateMessageDTO from '../dtos/ICreateMessageDTO';
import Message from '../infra/typeorm/schemas/Message';

export default interface IMessagesRepository {
  create(data: ICreateMessageDTO): Promise<Message>;
}
