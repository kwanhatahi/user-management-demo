import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from '../../user/user.entity';

export default class InitialSeeding implements Seeder {
  connection: Connection;
  factory: Factory;

  public async run(factory: Factory, connection: Connection): Promise<void> {
    this.connection = connection;
    this.factory = factory;
    // create user
    await factory(User)().createMany(100);
  }
}
