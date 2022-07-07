import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CredentialDTO } from './dto/credential.dto';
import { UserRegistrationlDTO } from './dto/user-registration.dto';
import { Hashing } from './hashing';
import { TokenService } from './token.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService, 
        private tokenService: TokenService,
        private hashing: Hashing
    ){}

    async doLogin(credential: CredentialDTO) {
        const user = await this.usersService.findOne(credential.email);
        if ( !user ) {
            throw new HttpException('credentials are invalid or the user does not exist.', HttpStatus.NOT_FOUND);
        }

        const check = await this.hashing.compare(credential.password, user.password);
        if ( !check ) {
            throw new HttpException('credentials are invalid or the user does not exist.', HttpStatus.FORBIDDEN);
        }

        const token = await this.tokenService.create(user);
        const data = {
            "user": {
                "username": user.username,
                "email": user.email
            },
            "accessToken": token
        };   
        
        return data;
    }

    async doRegister(userRegistration: UserRegistrationlDTO) {
        const user = await this.usersService.findOne(userRegistration.email);
        if ( user ) {
            throw new HttpException('the user is already registered.', HttpStatus.CONFLICT);
        }

        userRegistration.password = await this.hashing.encode(userRegistration.password);

        const register = await this.usersService.create(userRegistration);

        return {
            "dni": register.dni,
            "username": register.dni,
            "email": register.email,
            "active": register.active
        }
    }

    async getMe(token: string) {
        return this.tokenService.reveals(token);
    }
}
