import { IsInt, IsNotEmpty, IsNumber, IsOptional, isString, IsString } from "class-validator";
import { Game } from "../entities/game.entity";
import { Prisma } from "@prisma/client";

export class CreateGameDto extends Game{
    @IsString()
    @IsNotEmpty()
    title: string;
    @IsString()
    image: string;
    @IsNumber()
    year: number;
    @IsNumber()
    nota: number;
    @IsString()
    trailer: string;
    @IsString()
    gameplay: string;
    gamelist?: Prisma.Game_listCreateNestedManyWithoutGameInput;
    genrelist?: Prisma.Genre_listCreateNestedManyWithoutGameInput;
}
