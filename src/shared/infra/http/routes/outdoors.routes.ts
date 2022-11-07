import { CreateOutdoorController } from "@modules/outdoors/useCases/CreateOutdoorController";
import { Router } from "express";

const outdoorsRoutes = Router();

const createOutdoorController = new CreateOutdoorController();

outdoorsRoutes.post("/", createOutdoorController.handle);

export { outdoorsRoutes };