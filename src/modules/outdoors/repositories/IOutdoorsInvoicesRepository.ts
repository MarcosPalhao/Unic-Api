import { ICreateOutdoorInvoiceDTO } from "../dtos/ICreateOutdoorInvoiceDTO";

interface IOutdoorsInvoicesRepository {
    create(data: ICreateOutdoorInvoiceDTO): Promise<void>;
}

export { IOutdoorsInvoicesRepository };