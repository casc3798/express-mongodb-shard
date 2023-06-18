import { Db } from "mongodb";
import { MigrationInterface } from "mongo-migrate-ts";

export class Migration1687062133788 implements MigrationInterface {
  public async up(db: Db): Promise<any> {
    await db.createCollection("pet");
  }

  public async down(db: Db): Promise<any> {
    await db.dropCollection("pet");
  }
}
