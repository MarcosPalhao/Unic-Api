import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOutdoors1667829740014 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "outdoors",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "address_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "reference", 
                        type: "varchar"
                    },
                    {
                        name: "measure",
                        type: "varchar"
                    },
                    {
                        name: "status",
                        type: "numeric",
                        default: "1"
                    },
                    {
                        name: "cover",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "iframe_maps",
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
                ],
                foreignKeys: [
                    {
                        name: "FKAddressOutdoor",
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
        await queryRunner.dropTable("outdoors");
    }
}
