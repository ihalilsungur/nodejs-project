import { Controller, Body, Post, Get, Param, Put, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateDto, UserUpdateDto } from 'tools/dtos/user.dto';
import { UserModel } from 'tools/models/user.model';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers(): Promise<UserModel[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async getUserById(@Param() params): Promise<UserModel> {
    return await this.userService.findOne(params.id);
  }

  @Post()
  async createUser(@Body() body: UserCreateDto): Promise<UserModel> {
    return await this.userService.create(body);
  }

  @Put('id')
  async userUpdate(
    @Param('id') id: string,
    @Body() user: UserUpdateDto,
  ): Promise<UserModel> {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async removeUser(@Param('id') id :string):Promise<UserModel>{
    return await this.userService.delete(id);
  }
}
