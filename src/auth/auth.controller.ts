import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { AuthDto } from './dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor (
        private authService: AuthService
    ) {}

    @ApiBody({type: AuthDto})
    @Post('signup')
    signup(@Body() authDto: AuthDto) {
        
        return this.authService.signup(authDto);
    }

    @Post('login')
    login() {
        return this.authService.login();
    }
}