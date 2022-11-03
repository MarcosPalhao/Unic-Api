import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

class CreateCustomerController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            name,
            email,
            document,
            phone,
            address_street,
            address_number,
            address_postal_code,
            address_city,
            address_state
        } = request.body;

        const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

        await createCustomerUseCase.execute({
            name,
            email,
            document,
            phone,
            address_street,
            address_number,
            address_postal_code,
            address_city,
            address_state
        });

        return response.status(201).send();
    }
}

export { CreateCustomerController };