import { CreateCustomerController } from "@modules/customers/useCases/createCustomer/CreateCustomerController";
import { Router } from "express";

const customersRoutes = Router();

const createCustomerController = new CreateCustomerController();

customersRoutes.post("/", createCustomerController.handle);

export { customersRoutes };