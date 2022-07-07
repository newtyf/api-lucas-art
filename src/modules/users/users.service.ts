import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument} from './schema/user.schema';
import { UserDTO } from './dto/user.dto';
import { UserRegistrationlDTO } from '../auth/dto/user-registration.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private model: Model<UserDocument>) {}

    async getUserById(id: string): Promise<UserDTO> {
        return await this.model.findOne({"id": id}).exec();
    }

    async findOne(email: string): Promise<UserDocument> {
        return await this.model.findOne({"email": email, "active": true}).exec();
    }

    async create(user: UserRegistrationlDTO) {
        return await this.model.create(user);
    }
}
