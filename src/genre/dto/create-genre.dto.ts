import { IsInt, IsNotEmpty, IsNumber, IsOptional, isString, IsString } from "class-validator";
import { Prisma } from ".prisma/client";
import { Genre } from "../entities/genre.entity";

export class CreateGenreDto extends Genre{
    @IsString()
    name: string;
    genrelist?: Prisma.Genre_listUncheckedCreateNestedManyWithoutGenreInput;
}
