import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCustomers1667475327730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "customers",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "document",
                        type: "numeric"
                    },
                    {
                        name: "phone",
                        type: "numeric"
                    },
                    {
                        name: "address_street",
                        type: "varchar"
                    },
                    {
                        name: "address_number",
                        type: "numeric"
                    },
                    {
                        name: "address_postal_code",
                        type: "numeric"
                    },
                    {
                        name: "address_city",
                        type: "varchar"
                    },
                    {
                        name: "address_state",
                        type: "varchar"
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customers")
    }

}
