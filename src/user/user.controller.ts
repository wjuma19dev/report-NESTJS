import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('/auth')
export class UserController {

    constructor(private userService: UserService) {}

    @Get()
    getIndex() {
        return "User works!"
    }

    @Post('/signup')
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto.email, createUserDto.password);
    }
}