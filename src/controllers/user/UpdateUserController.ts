import { Request, Response } from "express";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id, name, email, admin, password } = request.body;

    console.log(name);
    console.log(email);
    console.log(admin);
    console.log(password);

    const user = {
      id,
      name,
      email,
      admin,
      password
    };

    return response.json(user);
  }
}

export { UpdateUserController };
