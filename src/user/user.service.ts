import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  private readonly _include = {
    gamelist:{
    select:{
          id:true,
          email:true,
          username:true,
          password:true,
          
    }}
  }
  create(data: CreateUserDto) {
    return this.prisma.user.create({
      include: this._include,
      data,
    });
  }

  findAll() {
    return this.prisma.user.findMany({
      include:this._include,
    });
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({
      include:this._include,
      where:{id}
    });
  }

  update(id: number, data: UpdateUserDto) {
    return this.prisma.user.update({
      include:this._include,
      where:{id},
      data,
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({
      where:{id}
    });
  }
}
