import { InputType, Field } from "type-graphql";
import { Length, IsEmail } from "class-validator";

@InputType()
export class RegisterInput {
  @Field()
  @Length(2, 30, { message: "El nombre es inválido" })
  firstName: string;

  @Field()
  @IsEmail()
  email: string;

  @Field()
  password: string;
}
