import Elysia from "elysia";
import RegisterUser from "../core/user/service/RegisterUser";

export default class RegisterUserController {
  constructor(
    private readonly server: Elysia,
    private readonly useCase: RegisterUser
  ) {
    this.server.post("/users", async ({ body }) => {
      const { name, email, password } = body as any;

      await this.useCase.execute({ name, email, password });

      return {
        status: 201,
        body: {
          message: "User created with success",
        },
      };
    });
  }
}
