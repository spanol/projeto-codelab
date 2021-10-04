import { Prisma } from ".prisma/client";
import { Genre } from "../entities/genre.entity";
export declare class CreateGenreDto extends Genre {
    name: string;
    genrelist?: Prisma.Genre_listUncheckedCreateNestedManyWithoutGenreInput;
}
