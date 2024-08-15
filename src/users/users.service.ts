import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Lean Chow',
      email: 'chow@gmail.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Mikey Homman',
      email: 'Homman@gmail.com',
      role: 'INTERN',
    },
    {
      id: 3,
      name: 'John Doe',
      email: 'doe@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Miles Lile',
      email: 'lile@gmail.com',
      role: 'ENGINEER',
    },
  ];
  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if(role){
        return this.users.filter(user=> user.role=== role);
    }
  }
  findOne() {}
  create() {}
  update() {}
  delete() {}
}
