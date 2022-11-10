import { CreateHiredOutdoorController } from "@modules/outdoors/useCases/createHiredOutdoor/CreateHiredOutdoorController";
import { CreateOutdoorController } from "@modules/outdoors/useCases/createOutdoor/CreateOutdoorController";
import { Router } from "express";

const outdoorsRoutes = Router();

const createOutdoorController = new CreateOutdoorController();
const createHiredOutdoorController = new CreateHiredOutdoorController();

outdoorsRoutes.post("/", createOutdoorController.handle);
outdoorsRoutes.post("/alugar", createHiredOutdoorController.handle);

export { outdoorsRoutes };