import { CreateHiredOutdoorController } from "@modules/outdoors/useCases/createHiredOutdoor/CreateHiredOutdoorController";
import { CreateOutdoorController } from "@modules/outdoors/useCases/createOutdoor/CreateOutdoorController";
import { CreateOutdoorInvoiceController } from "@modules/outdoors/useCases/createOutdoorInvoice/CreateOutdoorInvoiceController";
import { Router } from "express";

const outdoorsRoutes = Router();

const createOutdoorController = new CreateOutdoorController();
const createHiredOutdoorController = new CreateHiredOutdoorController();
const createOutdoorInvoiceController = new CreateOutdoorInvoiceController();

outdoorsRoutes.post("/", createOutdoorController.handle);
outdoorsRoutes.post("/alugar", createHiredOutdoorController.handle);
outdoorsRoutes.post("/fatura", createOutdoorInvoiceController.handle);

export { outdoorsRoutes };