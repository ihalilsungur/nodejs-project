import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[UserModule,MongooseModule.forFeature([{name:'User',schema:'UserSchema'}])],
    controllers:[UserController],
    providers:[UserService]
})
export class UserModule {}
