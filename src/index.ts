import { Elysia } from "elysia";
import UserRepositoryMemory from "./external/memory/UserRepositoryMemory";
import RegisterUser from "./core/user/service/RegisterUser";
import RegisterUserController from "./adapters/RegisterUserController";

const app = new Elysia();

const userRepository = new UserRepositoryMemory();
const registerUser = new RegisterUser(userRepository);
new RegisterUserController(app, registerUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
