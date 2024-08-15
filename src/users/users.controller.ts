import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UsersController {
  /* 
 
   
    POST /users
    PATCH /users/:id
    DELETE /Users/:id
 */
  @Get() //GET /users
  findAll() {
    return [];
  }

  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: string) {
    return { id };
  }
}
