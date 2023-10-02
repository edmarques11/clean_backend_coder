import IUseCase from "../../shared/IUseCase";
import IUser from "../model/IUser";
import IUserRepository from "./IUserRepository";

type Entry = {
  name: string;
  email: string;
  password: string;
};

export default class RegisterUser implements IUseCase<Entry, void> {
  constructor(private readonly repository: IUserRepository) {}

  async execute(entry: Entry): Promise<void> {
    const { name, email, password } = entry;

    const userAlreadyExists = await this.repository.findByEmail(email);

    if (userAlreadyExists) throw new Error("User already exists");

    await this.repository.create({
      name,
      email,
      password,
    } as IUser);
  }
}
