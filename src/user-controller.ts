import { Request, Response } from "express";
import { UserService } from "./user-service";

export class UserController {
  constructor(private readonly userService: UserService) {}

  async run(req: Request, res: Response) {
    const response = await this.userService.run(req.params.id)
    res.status(200).send(response);
  }
}
