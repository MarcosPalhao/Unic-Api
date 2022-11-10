import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateHiredOutdoors1667934384155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "hired_outdoors",
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
                        name: "exp_date",
                        type: "timestamp"
                    },
                    {
                        name: "active",
                        type: "numeric",
                        default: "1"
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
        await queryRunner.dropTable("hired_outdoors")
    }

}
