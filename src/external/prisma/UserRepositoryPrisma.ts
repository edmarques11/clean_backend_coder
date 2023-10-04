import { PrismaClient } from "@prisma/client";
import IUser from "../../core/user/model/IUser";
import IUserRepository from "../../core/user/service/IUserRepository";

export default class UserRepositoryPrisma implements IUserRepository {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  findByEmail(email: string): Promise<IUser | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  create(user: IUser): Promise<IUser> {
    return this.prisma.user.create({ data: user });
  }

  findAll(): Promise<IUser[]> {
    return this.prisma.user.findMany();
  }

  findById(id: number): Promise<IUser | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }
}
