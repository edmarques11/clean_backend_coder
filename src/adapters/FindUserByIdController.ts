import Elysia from "elysia";
import FindUserById from "../core/user/service/FindUserById";

export default class FindUserByIdController {
  constructor(
    private readonly server: Elysia,
    private readonly useCase: FindUserById
  ) {
    this.server.get("/user/:id", async ({ params }) => {
      const { id } = params;

      const user = await this.useCase.execute(+id);

      return {
        status: 200,
        body: {
          message: "Ok",
          user,
        },
      };
    });
  }
}
