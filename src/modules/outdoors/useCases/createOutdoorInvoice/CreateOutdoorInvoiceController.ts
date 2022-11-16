import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateOutdoorInvoiceUseCase } from "./CreateOutdoorInvoiceUseCase";

class CreateOutdoorInvoiceController {
    async handle(request: Request, response: Response): Promise<Response> {
        const {
            customer_id,
            outdoor_id,
            value,
            due_at,
            pay_date,
            status,
            description
        } = request.body;

        const createOutdoorInvoiceUseCase = container.resolve(CreateOutdoorInvoiceUseCase);

        const invoiceOutdoor = await createOutdoorInvoiceUseCase.execute({
            customer_id,
            outdoor_id,
            value,
            due_at,
            pay_date,
            status,
            description
        });

        return response.status(201).send(invoiceOutdoor);
    }
}

export { CreateOutdoorInvoiceController };