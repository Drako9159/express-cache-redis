import { CacheManager } from "./cache-manager";
import { sleep } from "./sleep";

export class UserService {
  constructor(private readonly cacheManager: CacheManager) {}

  async run(userId: string) {
    const key = `UserService__run__${userId}`;
    const cacheValue = await this.cacheManager.get(key);
    if (cacheValue) {
      return cacheValue;
    }

    await sleep(3000);

    const result = { userId };
    await this.cacheManager.set(key, result, {
      expirationMs: 60000,
    });

    return result;
  }
}
