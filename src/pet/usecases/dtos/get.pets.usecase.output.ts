import PetResponse from "src/pet/dtos/pet.response";

export default class GetPetsUseCaseoutput{
    currentPage: number;
    totalPages: number;
    items: PetResponse[];

    constructor(data: Partial<GetPetsUseCaseoutput>){
        Object.assign(this, data)
    }
}