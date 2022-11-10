import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateHiredOutdoorUseCase } from "./CreateHiredOutdoorUseCase";

class CreateHiredOutdoorController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            customer_id,
            outdoor_id,
            exp_date,
            active
        } = request.body;

        const createHiredOutdoorUseCase = container.resolve(CreateHiredOutdoorUseCase);

        const hiredOutdoor = await createHiredOutdoorUseCase.execute({
            customer_id,
            outdoor_id,
            exp_date,
            active
        });

        return response.status(201).send(hiredOutdoor);
    }
}

export { CreateHiredOutdoorController };