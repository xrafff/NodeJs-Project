//import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorreto");
    }

    //const passwordHash = await hash(password, 8);

    var vuser ={
        name:name, email:email, admin:false
    };

    return vuser;
  }
}

export { CreateUserService };