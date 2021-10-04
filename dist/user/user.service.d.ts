import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    private readonly _include;
    create(data: CreateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        gamelist: {
            email: never;
            username: never;
            password: never;
            id: number;
        }[];
    }>;
    findAll(): import(".prisma/client").PrismaPromise<(import(".prisma/client").User & {
        gamelist: {
            email: never;
            username: never;
            password: never;
            id: number;
        }[];
    })[]>;
    findOne(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        gamelist: {
            email: never;
            username: never;
            password: never;
            id: number;
        }[];
    }>;
    update(id: number, data: UpdateUserDto): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User & {
        gamelist: {
            email: never;
            username: never;
            password: never;
            id: number;
        }[];
    }>;
    remove(id: number): import(".prisma/client").Prisma.Prisma__UserClient<import(".prisma/client").User>;
}
