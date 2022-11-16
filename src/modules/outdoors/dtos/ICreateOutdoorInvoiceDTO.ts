interface ICreateOutdoorInvoiceDTO {
    customer_id: string;
    outdoor_id: string;
    value: number;
    due_at: Date;
    pay_date?: Date;
    status: number;
    description?: string;
}

export { ICreateOutdoorInvoiceDTO };