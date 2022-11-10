import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOutdoorUseCase } from "./CreateOutdoorUseCase";

class CreateOutdoorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            address_id,
            reference,
            measure,
            status,
            cover,
            iframe_maps
        } = request.body;

        const createOutdoorUseCase = container.resolve(CreateOutdoorUseCase);

        await createOutdoorUseCase.execute({
            address_id,
            reference,
            measure,
            status,
            cover,
            iframe_maps
        });

        return response.status(201).send();
    }
}

export { CreateOutdoorController };