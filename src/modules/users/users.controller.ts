import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UserDTO } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly service: UsersService
    ) {}

    @Get(':id')
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    async getUserById(@Param('id') id: string): Promise<UserDTO> {
      return await this.service.getUserById(id);
    }
}
