import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRentsInvoices1667913612785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "rents_invoices",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "address_id",
                        type: "uuid"
                    },
                    {
                        name: "value",
                        type: "numeric"
                    },
                    {
                        name: "due_at",
                        type: "timestamp"
                    },
                    {
                        name: "pay_date",
                        type: "timestamp",
                        isNullable: true
                    },
                    {
                        name: "status",
                        type: "numeric",
                        default: "1"
                    },
                    {
                        name: "description",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKAddressRentals",
                        referencedTableName: "address",
                        referencedColumnNames: ["id"],
                        columnNames: ["address_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rents_invoices")
    }

}
