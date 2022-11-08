import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateAddressUseCase } from "./CreateAddressUseCase";

class CreateAddressController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, exp_day, status } = request.body;

        const createUserUseCase = container.resolve(CreateAddressUseCase);

        await createUserUseCase.execute({
            name,
            exp_day,
            status
        });

        return response.status(201).send();
    }
}

export { CreateAddressController };