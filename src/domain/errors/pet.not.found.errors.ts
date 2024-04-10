import { CustomError } from "./custom.errors";

export default class PetNotFoundError extends CustomError{
    constructor(){
        super('Pet Not Fount', '0001')
    }
}