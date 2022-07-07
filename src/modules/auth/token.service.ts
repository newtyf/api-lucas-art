import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDocument } from '../users/schema/user.schema';
import { jwtConstants } from './jwt.constants';

@Injectable()
export class TokenService {
    constructor(private jwtService: JwtService) { }

    async create(user: UserDocument): Promise<string> {
        const payload = { id: user._id, dni: user.dni, username: user.username, email: user.email };

        return this.jwtService.sign(payload);
    }

    async reveals(token: string) {
        const payload = await this.jwtService.verifyAsync(token, {
            secret: jwtConstants.secret
        });

        return payload;
    }
}
