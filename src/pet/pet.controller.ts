import { BadRequestException, Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { IUseCase } from 'src/domain/iusecase.interface';
import PetTokens from './pet.tokens';
import CreatePetUseCaseInput from './usecases/create.pet.usecase.input';
import CreatePetUseCaseOutput from './usecases/create.pet.usecase.output';
import CreatePetControllerInput from './dtos/create.pet.controller.input';
import GetPetByIdUseCaseInput from './usecases/dtos/get.pet.by.id.usecase.input';
import GetPetByIdUseCaseOutput from './usecases/dtos/get.pet.by.id.usecase.output';
import { error } from 'console';

@Controller('pet')
export class PetController {
  @Inject(PetTokens.createPetUseCase)
  private readonly createPetUseCase: IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>;

  @Inject(PetTokens.getPetByIdUseCase)
  private readonly getPetByIdUseCase: IUseCase<GetPetByIdUseCaseInput, GetPetByIdUseCaseOutput>;

  @Post()
  async createPet(
    @Body() input: CreatePetControllerInput,
  ): Promise<CreatePetUseCaseOutput> {
    const usecaseInput = new CreatePetUseCaseInput({ ...input });
    return await this.createPetUseCase.run(usecaseInput);
  }

  @Get(':id')
  async getPetById(@Param('id') id: string):Promise<GetPetByIdUseCaseOutput> {
    try{
    const useCaseInput = new GetPetByIdUseCaseInput({id})
    return await this.getPetByIdUseCase.run(useCaseInput)
    }
    catch(error){
      throw new BadRequestException(JSON.parse(error.message))
    }
  }
}
