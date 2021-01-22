import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import Message from '../infra/typeorm/schemas/Message';
import IMessagesRepository from '../repositories/IMessagesRepository';

interface IRequest {
  from: string;

  to: string;

  body: string;

  recipient_id: string;

  id: string;
}

@injectable()
export default class CreateMessageService {
  constructor(
    @inject('MessagesRepository')
    private messagesRepository: IMessagesRepository,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    from,
    to,
    body,
    recipient_id,
    id,
  }: IRequest): Promise<Message> {
    const user = this.usersRepository.findById(id);

    const message = await this.messagesRepository.create({
      from,
      to,
      body,
      recipient_id: id,
    });

    return message;
  }
}
