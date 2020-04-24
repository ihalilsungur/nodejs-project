import { Controller, Body, Post, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto } from 'src/tools/dtos/user.dto';
import { UserModel } from 'src/tools/models/user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  getUserById(@Param() params): UserModel {
   return this.userService.getUserById(params.id);
  }

  @Post()
  createUser(@Body() body: UserCreateDto) {
    return this.userService.createUser(body);
  }

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
}
