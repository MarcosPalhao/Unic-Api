import { CreateAddressController } from "@modules/adresses/useCases/createAddress/CreateAddressController";
import { CreateRentalsAdressesInvoicesController } from "@modules/adresses/useCases/createRentalAddressInvoice/CreateRentalsAdressesInvoicesController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const adressesRoutes = Router();

const createAddressController = new CreateAddressController();
const createRentalsAdressesInvoicesController = new CreateRentalsAdressesInvoicesController();

adressesRoutes.post("/", ensureAuthenticated, ensureAdmin, createAddressController.handle);
adressesRoutes.post("/invoice", ensureAuthenticated, ensureAdmin, createRentalsAdressesInvoicesController.handle);

export { adressesRoutes };