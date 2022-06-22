import { Users } from 'src/model/users.entity';
import { ForbiddenException, Injectable } from "@nestjs/common";
import { LoginDto, SignupDto } from "./dto";
import * as argon from 'argon2';
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {

    constructor(
        @InjectRepository(Users) private usersRepository: Repository<Users>,
        private jwt: JwtService,
        private config: ConfigService
    ) { }

    async signup(dto: SignupDto) {
        // generate the password hash
        const hashPass = await argon.hash(dto.password);
        // save user in the DB
        try {
            const user = await this.usersRepository.save({
                email: dto.email,
                password: hashPass,
                firstName: dto.firstName,
                lastName: dto.lastName,
                phone: dto.phone
            });

            // delete user.password;
            return this.signToken(user.userId, user.email)
        } catch (error) {
            throw error;
        }
        
    }

    async login(dto: LoginDto) {
        const user = await this.usersRepository.findOne({
            where: {
                email: dto.email
            }
        });

        if (!user) {
            throw new ForbiddenException('Credentials incorrect')
        }

        const pwMatch = await argon.verify(user.password, dto.password);
        if (!pwMatch) {
            throw new ForbiddenException('Credentials incorrect')
        }

        // delete user.password;
        return this.signToken(user.userId, user.email)
         
    }

    async signToken(userId: number, email: string): Promise<{token: string}> {
        const payload = { sub: userId, email }

        const secret = this.config.get('JWT_SECRET')

        const access_token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret
        })
        
        return {
            token: access_token
        }

    }
}
