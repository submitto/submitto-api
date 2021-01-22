import MessagesRepository from '../infra/typeorm/repositories/MessagesRepository';
import CreateMessageService from './CreateMessageService';

let messagesRepository: MessagesRepository;
let createMessage: CreateMessageService;

describe('CreateMessage', () => {
  beforeEach(() => {
    messagesRepository = new MessagesRepository();

    createMessage = new CreateMessageService(messagesRepository);
  });

  it('should be able to create a new message', async () => {
    const message = await createMessage.execute({
      from: '+5561982656044',
      to: '+5561984154225',
      body: 'Hello ma man',
    });

    expect(message).toHaveProperty('id');
  });
});
