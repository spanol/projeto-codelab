import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
export declare class GenreController {
    private readonly genreService;
    constructor(genreService: GenreService);
    create(createGenreDto: CreateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        genrelist: {
            id: number;
            game: import(".prisma/client").Game;
            GameId: number;
            genre: import(".prisma/client").Genre;
            GenreId: number;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Genre & {
        genrelist: {
            id: number;
            game: import(".prisma/client").Game;
            GameId: number;
            genre: import(".prisma/client").Genre;
            GenreId: number;
        }[];
    })[]>;
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        genrelist: {
            id: number;
            game: import(".prisma/client").Game;
            GameId: number;
            genre: import(".prisma/client").Genre;
            GenreId: number;
        }[];
    }>;
    update(id: string, updateGenreDto: UpdateGenreDto): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre & {
        genrelist: {
            id: number;
            game: import(".prisma/client").Game;
            GameId: number;
            genre: import(".prisma/client").Genre;
            GenreId: number;
        }[];
    }>;
    remove(id: string): import(".prisma/client").Prisma.Prisma__GenreClient<import(".prisma/client").Genre>;
}
