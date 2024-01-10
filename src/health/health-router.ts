import express from "express";

import { HealthController } from "./health-controller";
import { healthController } from "../dependencies";

const healthRouter = express.Router();

healthRouter.get("/", healthController.run.bind(healthController));

export { healthRouter };
