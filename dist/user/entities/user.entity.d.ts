import { Prisma } from ".prisma/client";
export declare class User implements Prisma.UserUncheckedCreateInput {
    id?: number;
    email: string;
    username: string;
    password: string;
    gamelist?: Prisma.Game_listUncheckedCreateNestedManyWithoutUserInput;
}
