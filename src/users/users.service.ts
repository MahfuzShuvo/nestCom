import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/model/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) {}

    async getUsers() {
        const query = 'Select * from users';
        const allUsers = await this.usersRepository.query(query);

        if (allUsers) {
            return {
                status: true,
                responseCode: 200,
                responseObj: allUsers
            }
        }
    }
}
