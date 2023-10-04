import IUser from "../../core/user/model/IUser";
import IUserRepository from "../../core/user/service/IUserRepository";

export default class UserRepositoryMemory implements IUserRepository {
  private readonly users: IUser[] = [];

  async findByEmail(email: string): Promise<IUser | null> {
    const user = this.users.find((u) => u.email === email);

    return user ?? null;
  }

  async create(user: IUser): Promise<IUser> {
    const newUser = { ...user, id: Math.random() };

    this.users.push(newUser);

    return newUser;
  }

  async findAll(): Promise<IUser[]> {
    return this.users;
  }

  async findById(id: number): Promise<IUser | null> {
    return this.users.find((u) => u.id === id) ?? null;
  }
}
