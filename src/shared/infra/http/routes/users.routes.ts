import { Router } from "express";
import { CreateUserController } from "@modules/users/useCases/createUser/CreateUserController";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { ensureAdmin } from "../middlewares/ensureAdmin";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/", ensureAuthenticated, ensureAdmin, createUserController.handle);

export { usersRoutes };