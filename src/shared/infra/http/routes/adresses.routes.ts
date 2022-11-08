import { CreateAddressController } from "@modules/adresses/useCases/createAddress/CreateAddressController";
import { CreateRentalsAdressesInvoicesController } from "@modules/adresses/useCases/createRentalAddressInvoice/CreateRentalsAdressesInvoicesController";
import { Router } from "express";

const adressesRoutes = Router();

const createAddressController = new CreateAddressController();
const createRentalsAdressesInvoicesController = new CreateRentalsAdressesInvoicesController();

adressesRoutes.post("/", createAddressController.handle);
adressesRoutes.post("/invoice", createRentalsAdressesInvoicesController.handle);

export { adressesRoutes };