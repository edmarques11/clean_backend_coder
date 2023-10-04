import IUseCase from "../../shared/IUseCase";
import IUser from "../model/IUser";
import IUserRepository from "./IUserRepository";

export default class FindUserById implements IUseCase<number, IUser | null> {
  constructor(private readonly repository: IUserRepository) {}

  execute(entry: number): Promise<IUser | null> {
    return this.repository.findById(entry);
  }
}
