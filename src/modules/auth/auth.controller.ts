import { Body, Controller, Get, HttpStatus, Post, Request, Response, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CredentialDTO } from './dto/credential.dto';
import { UserRegistrationlDTO } from './dto/user-registration.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private service: AuthService
    ) { }

    @Post('login')
    async login(@Response() response, @Body() credential: CredentialDTO) {
        const login = await this.service.doLogin(credential);

        return response.status(HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": login
        });
    }

    @Post('register')
    async register(@Response() response, @Body() userRegistration: UserRegistrationlDTO) {
        const register = await this.service.doRegister(userRegistration);

        return response.status(HttpStatus.CREATED).json({
            "status": "success",
            "message": "successful operation",
            "data": register
        });
    }    

    @Get('/me')
    @UseGuards(JwtAuthGuard)
    async getUserById(@Response() response, @Request() req: any) {
        return response.status(HttpStatus.OK).json({
            "status": "success",
            "message": "successful operation",
            "data": req.user
        });
    }
}
