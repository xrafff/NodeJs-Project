import { Request, Response } from "express";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const id = request.params.id;
    console.log(id);
    return response.json("Registro excluído com sucesso");
  }
}

export { DeleteUserController };