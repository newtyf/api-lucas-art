import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { jwtConstants } from './jwt.constants';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { TokenService } from './token.service';
import { Hashing } from './hashing';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: jwtConstants.expireIn }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, TokenService, JwtStrategy, Hashing],
    exports: [AuthService, TokenService]
})
export class AuthModule { }