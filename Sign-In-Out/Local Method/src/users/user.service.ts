import { Injectable } from '@nestjs/common';
import { user } from './user.entity';

@Injectable()
export class userService {
  public users: user[] = [
    {
      userName: 'user1',
      password: 'password',
      email: 'user1@user.com',
    },
    {
      userName: 'user2',
      password: 'password',
      email: 'user2@user.com',
    },
    {
      userName: 'user3',
      password: 'password',
      email: 'user3@user.com',
    },
  ];
  getUserByName(userName: string): user | undefined {
    return this.users.find((user) => user.userName === userName);
}
}
