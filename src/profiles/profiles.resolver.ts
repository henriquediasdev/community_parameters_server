import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { ProfilesService } from './profiles.service';
import { Profile } from './entities/profile.entity';
import { CreateProfileInput } from './dto/create-profile.input';
import { UpdateProfileInput } from './dto/update-profile.input';

@Resolver(() => Profile)
export class ProfilesResolver {
  constructor(private readonly profilesService: ProfilesService) { }

  @Mutation(() => Profile)
  async createProfile(@Args('data') data: CreateProfileInput) {
    return await this.profilesService.create(data);
  }

  @Query(() => [Profile], { name: 'profiles' })
  async findAll() {
    return await this.profilesService.findAll();
  }

  @Query(() => Profile, { name: 'profile', nullable: true })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    return await this.profilesService.findOne(id)
  }

  @Mutation(() => Profile, { nullable: true })
  async updateProfile(@Args('data') data: UpdateProfileInput) {
    return await this.profilesService.update(data.id, data);
  }

  @Mutation(() => Profile, { nullable: true })
  async removeProfile(@Args('id', { type: () => ID }) id: string) {
    return await this.profilesService.remove(id);
  }
}
