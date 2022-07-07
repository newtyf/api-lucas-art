import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { UserDTO } from './dto/user.dto';
import { UserRegistrationlDTO } from '../auth/dto/user-registration.dto';
export declare class UsersService {
    private model;
    constructor(model: Model<UserDocument>);
    getUserById(id: string): Promise<UserDTO>;
    findOne(email: string): Promise<UserDocument>;
    create(user: UserRegistrationlDTO): Promise<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
