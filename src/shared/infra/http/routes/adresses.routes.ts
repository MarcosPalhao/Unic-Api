import { CreateAddressController } from "@modules/adresses/useCases/CreateAddressController";
import { Router } from "express";

const adressesRoutes = Router();

const createAddressController = new CreateAddressController();

adressesRoutes.post("/", createAddressController.handle);

export { adressesRoutes };