import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GameService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        gamelist: {
            user: import(".prisma/client").User;
            id: number;
            UserId: number;
            game: import(".prisma/client").Game;
            GameId: number;
        }[];
        genrelist: {
            id: number;
            genre: import(".prisma/client").Genre;
            GenreId: number;
            game: import(".prisma/client").Game;
            GameId: number;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").Game & {
        gamelist: {
            user: import(".prisma/client").User;
            id: number;
            UserId: number;
            game: import(".prisma/client").Game;
            GameId: number;
        }[];
        genrelist: {
            id: number;
            genre: import(".prisma/client").Genre;
            GenreId: number;
            game: import(".prisma/client").Game;
            GameId: number;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        gamelist: {
            user: import(".prisma/client").User;
            id: number;
            UserId: number;
            game: import(".prisma/client").Game;
            GameId: number;
        }[];
        genrelist: {
            id: number;
            genre: import(".prisma/client").Genre;
            GenreId: number;
            game: import(".prisma/client").Game;
            GameId: number;
        }[];
    }>;
    update(id: number, data: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
        gamelist: {
            user: import(".prisma/client").User;
            id: number;
            UserId: number;
            game: import(".prisma/client").Game;
            GameId: number;
        }[];
        genrelist: {
            id: number;
            genre: import(".prisma/client").Genre;
            GenreId: number;
            game: import(".prisma/client").Game;
            GameId: number;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
}
