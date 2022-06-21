import { Users } from 'src/model/users.entity';
import { Injectable } from "@nestjs/common";
import { AuthDto } from "./dto";
import * as argon from 'argon2';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>
    ) { }

    async signup(authDto: AuthDto) {
        // generate the password hash
        const hashPass = await argon.hash(authDto.password);
        // save user in the DB
        const user = await this.usersRepository.save({
                email: authDto.email,
                password: hashPass,
                firstName: authDto.firstName,
                lastName: authDto.lastName,
                phone: authDto.phone
        });

        return user;
        
    }

    login() {

    }
}