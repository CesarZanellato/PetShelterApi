import { IUseCase } from "src/domain/iusecase.interface";
import GetShelterDetailsUseCaseOutput from "./dtos/get.shelter.details.usecase.output";

export default class GetShelterDetailsUseCase implements IUseCase<null, GetShelterDetailsUseCaseOutput>{
    run(input: null): Promise<GetShelterDetailsUseCaseOutput> {
        return Promise.resolve(new GetShelterDetailsUseCaseOutput({
            // shelterName: "CASA DA MAE JOANA",
            // shelterEmail: 'EMAIL@EMAIL.COMMMMM',
            // shelterPhone: 'TELEFONE DA SUA IRMÃ',
            // shelterWhatsApp: 'WHATSAPP DA SUA IRMÃ',
            // createdAt: new Date(),
            // updatedAt: new Date()
        }))
    }

}