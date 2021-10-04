import { Prisma } from "@prisma/client";
import { IsEmail, IsString } from "class-validator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
    @IsEmail()
    email: string
    @IsString()
    username: string
    @IsString()
    password: string
    gamelist?: Prisma.Game_listCreateNestedManyWithoutUserInput
}
