import { hash } from "bcryptjs";

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

    const passwordHash = await hash(password, 8);
    console.log(passwordHash);
    
    var vuser ={
        name:"name", email:"email", admin:false, password:passwordHash
    };

    return vuser;
  }
}

export { CreateUserService };