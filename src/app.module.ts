import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import environment from '../tools/environment/environment';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [UserModule,MongooseModule.forRoot(environment.mongoUrl)],
  controllers: [AppController],
  providers: [AppService, UserService],
})
export class AppModule {}
