import { Game } from "../entities/game.entity";
import { Prisma } from "@prisma/client";
export declare class CreateGameDto extends Game {
    title: string;
    image: string;
    year: number;
    nota: number;
    trailer: string;
    gameplay: string;
    gamelist?: Prisma.Game_listCreateNestedManyWithoutGameInput;
    genrelist?: Prisma.Genre_listCreateNestedManyWithoutGameInput;
}
