import { GameService } from './game.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
export declare class GameController {
    private readonly gameService;
    constructor(gameService: GameService);
    create(createGameDto: CreateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
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
    findOne(id: string): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
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
    update(id: string, updateGameDto: UpdateGameDto): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game & {
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
    remove(id: string): import(".prisma/client").Prisma.Prisma__GameClient<import(".prisma/client").Game>;
}
