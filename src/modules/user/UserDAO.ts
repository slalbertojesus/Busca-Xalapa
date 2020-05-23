import { Resolver, Mutation, Arg, Query } from "type-graphql";
import bcrypt from "bcryptjs";
import "reflect-metadata";
import { User } from "../../entity/User";
import { RegisterInput } from "./Inputs/InputUserDao";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async register(
    @Arg("data") { email, firstName, password }: RegisterInput
  ): Promise<User> {
    const hashedPassoword = await bcrypt.hash(password, 12);
    const user = await User.create({
      firstName,
      email,
      password: hashedPassoword,
    }).save();
    return user;
  }
}
