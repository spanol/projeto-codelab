import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly _include ={
    genrelist:{
      select:{
      id: true,
      genre: true,
      GenreId: true,
      game: true,
      GameId: true
      }
    }
  }
  create(data: CreateGenreDto) {
    return this.prisma.genre.create({
      include:this._include,
      data,
    });
  }

  findAll() {
    return this.prisma.genre.findMany({
      include:this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.genre.findUnique({
      include:this._include,
      where:{id}
    });
  }

  update(id: number, data: UpdateGenreDto) {
    return this.prisma.genre.update({
      where:{id},
      include:this._include,
      data,
    });
  }

  remove(id: number) {
    return this.prisma.genre.delete({
      where:{id},

    });
  }
}
