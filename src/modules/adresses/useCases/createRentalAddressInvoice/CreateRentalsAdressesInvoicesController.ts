import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateRentalsAdressesInvoicesUseCase } from "./CreateRentalsAdressesInvoicesUseCase";

class CreateRentalsAdressesInvoicesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            address_id,
            value,
            due_at,
            pay_date,
            status,
            description
        } = request.body;

        const createRentalsAdressesInvoicesUseCase = container.resolve(CreateRentalsAdressesInvoicesUseCase);

        const rental = await createRentalsAdressesInvoicesUseCase.execute({
            address_id,
            value,
            due_at,
            pay_date,
            status,
            description
        });

        return response.status(201).send(rental);
    }
}

export { CreateRentalsAdressesInvoicesController };