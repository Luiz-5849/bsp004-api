import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUsersDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
