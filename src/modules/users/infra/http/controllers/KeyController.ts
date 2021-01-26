import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ShowUserKeyService from '@modules/users/services/ShowUserKeyService';
import { classToClass } from 'class-transformer';

export default class KeyController {
  public async show(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;

    const showUserKey = container.resolve(ShowUserKeyService);

    const sub = await showUserKey.execute({ user_id });

    return response.json(classToClass(sub));
  }
}
