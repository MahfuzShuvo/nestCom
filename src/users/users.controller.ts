import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { JwtGuard } from 'src/auth/guard';
import { UserDto } from './dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@UseGuards(JwtGuard)
@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ) { }

    @ApiBearerAuth('jwt')
    @ApiResponse({ status: 200, description: 'Show all users', type: UserDto })
    @Get()
    getLoggedinUser(@Req() req: Request) {
        return this.usersService.getLoggedinUser(req)
    }
}
