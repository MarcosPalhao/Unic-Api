import { CreateCustomerController } from "@modules/customers/useCases/createCustomer/CreateCustomerController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();

customersRoutes.post("/", ensureAuthenticated, ensureAdmin, createCustomerController.handle);

export { customersRoutes };