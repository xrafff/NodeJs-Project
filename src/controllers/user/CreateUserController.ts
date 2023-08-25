import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";

class CreateUserController {

  async handle(request: Request, response: Response) {
    const { name, email, admin, password } = request.body;
   
    const createUserService = new CreateUserService()
   
       
   const user = {
      name:name,
      email:email,
      admin:admin,
      password:password
    };
    response.send(await createUserService.execute(user)) ;

  }


}

export { CreateUserController };