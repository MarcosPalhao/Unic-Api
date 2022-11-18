import { Router } from "express";
import { adressesRoutes } from "./adresses.routes";
import { authenticateRoutes } from "./authenticate.routes";
import { customersRoutes } from "./customers.routes";
import { outdoorsRoutes } from "./outdoors.routes";
import { usersRoutes } from "./users.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/customers", customersRoutes);
router.use("/adresses", adressesRoutes);
router.use("/outdoors", outdoorsRoutes);
router.use(authenticateRoutes);

export { router };