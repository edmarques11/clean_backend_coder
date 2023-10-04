import { Elysia } from "elysia";
import RegisterUser from "./core/user/service/RegisterUser";
import RegisterUserController from "./adapters/RegisterUserController";
import UserRepositoryPrisma from "./external/prisma/UserRepositoryPrisma";
import FindUsers from "./core/user/service/FindUsers";
import FindUsersController from "./adapters/FindUsersController";
import FindUserById from "./core/user/service/FindUserById";
import FindUserByIdController from "./adapters/FindUserByIdController";

const app = new Elysia();

const userRepository = new UserRepositoryPrisma();

const registerUser = new RegisterUser(userRepository);
new RegisterUserController(app, registerUser);

const findUsers = new FindUsers(userRepository);
new FindUsersController(app, findUsers);

const findUserById = new FindUserById(userRepository);
new FindUserByIdController(app, findUserById);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
