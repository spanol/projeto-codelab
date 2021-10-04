import { Prisma } from "@prisma/client";
import { User } from "../entities/user.entity";
export declare class CreateUserDto extends User {
    email: string;
    username: string;
    password: string;
    gamelist?: Prisma.Game_listCreateNestedManyWithoutUserInput;
}
