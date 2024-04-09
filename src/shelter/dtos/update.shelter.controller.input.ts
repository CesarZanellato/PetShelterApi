import { IsEmail, IsNotEmpty, IsNumberString, IsPhoneNumber, IsString, Length } from 'class-validator';

export default class UpdateShelterControllerInput {
  @IsString()
  @IsNotEmpty()
  name: string;
  @IsString()
  @IsNotEmpty()
  @Length(10, 11)
  whatsApp: string;
  @IsString()
  @IsNotEmpty()
  @IsNumberString()
  phone: string;
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
