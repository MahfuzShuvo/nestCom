import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/model/users.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) {}

    async getLoggedinUser(req) {
        // const query = 'Select firstName, lastName, phone, email from users';
        // const allUsers = await this.usersRepository.query(query);

        // if (allUsers) {
        //     return {
        //         status: true,
        //         responseCode: 200,
        //         responseObj: allUsers
        //     }
        // }

        return req.user;
    }
}
