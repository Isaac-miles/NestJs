import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  /* 
 
   
   
    PATCH /users/:id
    DELETE /Users/:id
 */
  @Get() //GET /users
  findAll() {
    return [];
  }

  @Get(':id') // Get /users/:id
  findOne(@Param('id') id: string) {
    return { userId: id };
  }

  @Post() // POST /users
  create(@Body() user: []) {
    return user;
  }
}
