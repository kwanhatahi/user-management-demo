import {MigrationInterface, QueryRunner} from "typeorm";

export class user1690456592529 implements MigrationInterface {
    name = 'user1690456592529'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "no" integer GENERATED ALWAYS AS IDENTITY NOT NULL, "firstName" character varying(255) COLLATE "th-x-icu" NOT NULL, "lastName" character varying(255) COLLATE "th-x-icu" NOT NULL, "email" character varying NOT NULL, "phoneNumber" character varying(100) NOT NULL, CONSTRAINT "PK_6a97b24fe3bd1a14937599fae37" PRIMARY KEY ("id", "no"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
