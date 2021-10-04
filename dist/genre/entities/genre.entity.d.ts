import { Prisma } from ".prisma/client";
export declare class Genre implements Prisma.GenreUncheckedCreateInput {
    id?: number;
    name: string;
    genrelist?: Prisma.Genre_listUncheckedCreateNestedManyWithoutGenreInput;
}
