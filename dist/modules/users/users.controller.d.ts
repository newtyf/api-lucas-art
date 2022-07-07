import { UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private readonly service;
    constructor(service: UsersService);
    getUserById(id: string): Promise<UserDTO>;
}
