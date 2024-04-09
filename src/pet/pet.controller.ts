import { Body, Controller, Inject, Post } from '@nestjs/common';
import { IUseCase } from 'src/domain/iusecase.interface';
import PetTokens from './pet.tokens';
import CreatePetUseCaseInput from './usecases/create.pet.usecase.input';
import CreatePetUseCaseOutput from './usecases/create.pet.usecase.output';
import CreatePetControllerInput from './dtos/create.pet.controller.input';

@Controller('pet')
export class PetController {
  @Inject(PetTokens.createPetUseCase)
  private readonly createPetUseCase: IUseCase<
    CreatePetUseCaseInput,
    CreatePetUseCaseOutput
  >;
  
  @Post()
  async createPet(
    @Body() input: CreatePetControllerInput,
  ): Promise<CreatePetUseCaseOutput> {
    const usecaseInput = new CreatePetUseCaseInput({ ...input });
    return await this.createPetUseCase.run(usecaseInput);
  }
}
