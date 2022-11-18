import { CreateHiredOutdoorController } from "@modules/outdoors/useCases/createHiredOutdoor/CreateHiredOutdoorController";
import { CreateOutdoorController } from "@modules/outdoors/useCases/createOutdoor/CreateOutdoorController";
import { CreateOutdoorInvoiceController } from "@modules/outdoors/useCases/createOutdoorInvoice/CreateOutdoorInvoiceController";
import { Router } from "express";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const outdoorsRoutes = Router();

const createOutdoorController = new CreateOutdoorController();
const createHiredOutdoorController = new CreateHiredOutdoorController();
const createOutdoorInvoiceController = new CreateOutdoorInvoiceController();

outdoorsRoutes.post("/", ensureAuthenticated, ensureAdmin, createOutdoorController.handle);
outdoorsRoutes.post("/alugar", ensureAuthenticated, ensureAdmin, createHiredOutdoorController.handle);
outdoorsRoutes.post("/fatura", ensureAuthenticated, ensureAdmin, createOutdoorInvoiceController.handle);

export { outdoorsRoutes };