import { Injectable } from '@nestjs/common';
import { IUseCase } from 'src/domain/iusecase.interface';
import CreatePetUseCaseOutput from './create.pet.usecase.output';
import CreatePetUseCaseInput from './create.pet.usecase.input';

@Injectable()
export default class CreatePetUseCase
  implements IUseCase<CreatePetUseCaseInput, CreatePetUseCaseOutput>
{
  run(input: CreatePetUseCaseInput): Promise<CreatePetUseCaseOutput> {
    throw new Error('Method not implemented.');
  }
}
