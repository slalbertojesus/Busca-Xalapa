import { Resolver, Mutation, Arg, Query } from "type-graphql";
import * as bcrypt from "bcryptjs";
import "reflect-metadata";
import { User } from "../../entity/User";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => User)
  async register(
    @Arg("firstName") firstName: string,
    @Arg("email") email: string,
    @Arg("password") password: string
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
