import { Injectable } from '@nestjs/common';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProfilesService {
  constructor(private readonly prismaService: PrismaService) { }

  async create(data: CreateProfileInput) {
    const profile = await this.prismaService.profile.create({
      data: {
        printerId: data.printerId,
        consumableId: data.consumableId,
        profileFilament: data.profileFilament ? {
          create: data.profileFilament
        } : undefined,
        profileResin: data.profileResin ? {
          create: data.profileResin
        } : undefined,
      },
      include: {
        profileFilament: true,
        profileResin: true,
      }
    })
    return profile;
  }

  async findAll() {
    const profiles = await this.prismaService.profile.findMany({
      include: {
        profileFilament: true,
        profileResin: true,
      }
    });
    return profiles;
  }

  async findOne(id: string) {
    const profile = await this.prismaService.profile.findUnique({
      where: { id }, include: {
        profileFilament: true,
        profileResin: true,
      }
    });
    return profile;
  }

  async update(id: string, data: UpdateProfileInput) {
    const profile = await this.prismaService.profile.update({
      where: { id },
      data: {
        printerId: data.printerId,
        consumableId: data.consumableId,
        profileFilament: data.profileFilament ? {
          create: data.profileFilament
        } : undefined,
        profileResin: data.profileResin ? {
          create: data.profileResin
        } : undefined,
      },
      include: {
        profileFilament: true,
        profileResin: true,
      }

    });
    return profile;
  }

  async remove(id: string) {
    const profile = await this.prismaService.profile.delete({ where: { id } }); // Cascade
    return profile;
  }
}
