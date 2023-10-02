import IUser from "../model/IUser";

export default interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>;
  create(user: IUser): Promise<IUser>;
}
