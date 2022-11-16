import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOutdoorsInvoices1668165384874 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "outdoors_invoices",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "customer_id",
                        type: "uuid"
                    },
                    {
                        name: "outdoor_id",
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
                        default: 1
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
                        name: "FKOutdoorInvoice",
                        referencedTableName: "outdoors",
                        referencedColumnNames: ["id"],
                        columnNames: ["outdoor_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                        name: "FKCustomerOutdoorInvoice",
                        referencedTableName: "customers",
                        referencedColumnNames: ["id"],
                        columnNames: ["customer_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("outdoors_invoices");
    }

}
