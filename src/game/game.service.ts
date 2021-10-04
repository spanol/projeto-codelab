import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameDto } from './dto/update-game.dto';
@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly _include = {
    gamelist:{
      select:{
        id: true,
        user: true,
        UserId: true,
        game: true,
        GameId: true
      }
    },
    genrelist:{
      select:{
        id: true,
        genre: true,
        GenreId: true,
        game: true,
        GameId: true,

      }
    }

  }
  create(data: CreateGameDto) {
    return this.prisma.game.create({
      include:this._include,
      data,});
  }

  findAll() {
    return this.prisma.game.findMany({
      include:this._include,
    });
  }

  findOne(id: number) {
   return this.prisma.game.findUnique({
    include:this._include, 
    where:{id}
   });
  }

  update(id: number, data: UpdateGameDto) {
    return this.prisma.game.update({
      where:{id},
      include:this._include,
      data,  
    });
  }

  remove(id: number) {
    return this.prisma.game.delete({
      where:{id}});
  }
}
