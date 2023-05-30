import { IsEmail, IsNotEmpty } from 'class-validator';

export class User {
  id: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  age?: number;
}
