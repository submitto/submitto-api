import AppError from '@shared/errors/AppError';
import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowUserKeyService from './ShowUserKeyService';

let fakeUsersRepository: FakeUsersRepository;
let showUserKey: ShowUserKeyService;

describe('ShowUserKey', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    showUserKey = new ShowUserKeyService(fakeUsersRepository);
  });

  it('should be able to show user authentication key', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const response = await showUserKey.execute({
      user_id: user.id,
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should not be able to show the user authentication key of a non-existing user', async () => {
    expect(
      showUserKey.execute({
        user_id: 'non-existing-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
