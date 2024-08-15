import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get() //GET /users or /users?role=value
  findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
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

  @Patch(':id') // PATCH /users/:id
  update(@Param('id') id: string, @Body() userUpdate: object) {
    return { userId: id, ...userUpdate };
  }

  @Delete(':id') // DELETE /Users/:id
  deleteUser(@Param('id') id: string) {
    return { userId: id };
  }
}
