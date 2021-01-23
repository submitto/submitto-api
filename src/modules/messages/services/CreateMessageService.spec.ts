import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserSercice from '@modules/users/services/CreateUserService';
import AppError from '@shared/errors/AppError';
import FakeMessagesRepository from '../repositories/fakes/FakeMessagesRepository';
import CreateMessageService from './CreateMessageService';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserSercice;
let fakeHashProvider: FakeHashProvider;
let fakeMessagesRepository: FakeMessagesRepository;
let createMessage: CreateMessageService;

describe('CreateMessage', () => {
  beforeEach(() => {
    fakeMessagesRepository = new FakeMessagesRepository();
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashProvider = new FakeHashProvider();

    createUser = new CreateUserSercice(fakeUsersRepository, fakeHashProvider);

    createMessage = new CreateMessageService(
      fakeMessagesRepository,
      fakeUsersRepository,
    );
  });

  it('should be able to create a new message', async () => {
    const user = await createUser.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const message = await createMessage.execute({
      from: '+5561982656044',
      to: '+5561984154225',
      body: 'Hello world',
      user_id: user.id,
    });

    expect(message).toHaveProperty('id');
  });

  it('should not be able to create a message without user', async () => {
    await expect(
      createMessage.execute({
        from: '+5561982656044',
        to: '+5561984154225',
        body: 'Hello world',
        user_id: 'user_id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
