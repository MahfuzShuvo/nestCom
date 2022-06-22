import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { LoginDto, SignupDto } from './dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor (
        private authService: AuthService
    ) {}

    @ApiBody({type: SignupDto})
    @ApiResponse({ status: 200, description: 'signup in the system' })
    @Post('signup')
    signup(@Body() dto: SignupDto) {
        
        return this.authService.signup(dto);
    }
    @ApiBody({type: LoginDto})
    @ApiResponse({ status: 200, description: 'login in the system' })
    @Post('login')
    login(@Body() dto: LoginDto) {
        // req.user;
        return this.authService.login(dto);
    }
}