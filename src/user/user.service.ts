import { Injectable } from '@nestjs/common';
import { UserModel } from 'src/tools/models/user.model';
import { UserCreateDto } from 'src/tools/dtos/user.dto';

const result: UserModel[] = [];

@Injectable()
export class UserService {
  getAllUsers(): UserModel[] {
    if (result.length === 0) {
      this.creatingMockUser({
        birthDay: new Date(),
        email: 'abrahamsungur@gmail.com',
        name: 'Abraham',
        surname: 'Sungur',
        password: '12345',
      });
    }
    return result;
  }

  getUserById(id):any {
    const user = result.find(data => data.id == id
    );
    if (!user) {
      return 'user does not exist';
    } else {
      return user;
    }
  }

  createUser(body: UserCreateDto) {
    const isExist = result.find(res => 
      res.email === body.email
    );
    console.log('Bu Gelen Değer : ' + isExist);
    if (isExist) {
      return "Bu Email daha önce kaydedilmiştir.";
    } else {
      this.creatingMockUser(body);
      return result.slice(result.length - 1, result.length);
    }
  }

  private creatingMockUser(data: any) {
    const user: UserModel = new UserModel();
    user.birthDay = data.birthDay;
    user.email = data.email;
    user.name = data.name;
    user.surname = data.surname;
    user.password = data.password;
    user.id = Math.floor(Math.random() * 100 + 1).toString();
    result.push(user);
  }
}
