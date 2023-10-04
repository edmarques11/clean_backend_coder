import Elysia from "elysia";
import FindUsers from "../core/user/service/FindUsers";

export default class FindUsersController {
  constructor(
    private readonly server: Elysia,
    private readonly useCase: FindUsers
  ) {
    this.server.get("/users", async () => {
      const users = await this.useCase.execute();

      return {
        status: 200,
        body: {
          message: "Ok",
          users,
        },
      };
    });
  }
}
