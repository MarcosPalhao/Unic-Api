interface ICreateRentalAddressInvoiceDTO {
    address_id: string;
    value: number;
    due_at: Date;
    pay_date?: Date;
    status: number;
    description?: string;
}

export { ICreateRentalAddressInvoiceDTO };