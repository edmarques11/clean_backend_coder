import IUseCase from "../../shared/IUseCase";
import IUser from "../model/IUser";
import IUserRepository from "./IUserRepository";

export default class FindUsers implements IUseCase<void, IUser[]> {
  constructor(private readonly repository: IUserRepository) {}

  async execute(): Promise<IUser[]> {
    return await this.repository.findAll();
  }
}
