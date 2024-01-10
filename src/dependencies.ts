import { config } from "./config";
import { CacheManager } from "./cache-manager";
import { HealthController } from "./health/health-controller";
import { UserController } from "./user-controller";
import { UserService } from "./user-service";

const cacheManager = new CacheManager(config.redis.url);

const userService = new UserService(cacheManager);

export const userController = new UserController(userService);

export const healthController = new HealthController(cacheManager);
