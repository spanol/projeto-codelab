import { Prisma } from "@prisma/client";
export declare class Game implements Prisma.GameUncheckedCreateInput {
    id?: number;
    title: string;
    image: string;
    year: number;
    nota: number;
    trailer: string;
    gameplay: string;
    gamelist?: Prisma.Game_listCreateNestedManyWithoutGameInput;
    genrelist?: Prisma.Genre_listCreateNestedManyWithoutGameInput;
}
