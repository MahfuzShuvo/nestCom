import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ) { }

    @ApiResponse({ status: 200, description: 'Show all users' })
    @Get()
    getUsers() {
        return this.usersService.getUsers();
    }
}
