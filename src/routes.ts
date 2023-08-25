import { Router } from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";

import { ListUsersController } from "./controllers/user/ListUsersController";

/*
import { UpdateUserController} from "./controllers/UpdateUserController";
import { DeleteUserController} from "./controllers/DeleteUserController";
import {AuthenticateUserController} from "./controllers/AuthenticateUserController";
import { ensureAdmin} from "./middlewares/ensureAdmin";
import { ensureAuthenticated} from "./middlewares/ensureAuthenticated";

d

const updateUserController  = new UpdateUserController();
const deleteUserController  = new DeleteUserController();
const autenticationUserController  = new AuthenticateUserController();
*/
const createUserController  = new CreateUserController();
const listUsersController  = new ListUsersController();
const router = Router();
router.post("/user", createUserController.handle);
router.get("/listusers", listUsersController.handle);
/*
router.post("/login", autenticationUserController.handle);

router.get("/users",  ensureAuthenticated,ensureAdmin,listUsersController.handle);

router.use(ensureAdmin)
router.delete("/users/:id", deleteUserController.handle);
router.put("/users", updateUserController.handle);
*/
export {router}