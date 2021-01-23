import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import Message from '../infra/typeorm/schemas/Message';
// import IMessagesRepository from '../repositories/IMessagesRepository';

// interface IRequest {
//   from: string;

//   to: string;

//   body: string;

//   user_id: string;
// }

@injectable()
export default class CreateMessageService {
  constructor(
    @inject('SMSProvider')
    private smsProvider: ISMSProvider,

    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  public async execute({
    from,
    to,
    body,
    user_id,
  }: IRequest): Promise<Message> {
    const user = await this.usersRepository.findById(user_id);

    const userId = user?.id;

    if (!userId) {
      throw new AppError('user does not exists');
    }

    const message = await this.messagesRepository.create({
      from,
      to,
      body,
      recipient_id: userId,
    });

    return message;
  }
}
