import { Faker } from '@faker-js/faker';
import { User } from '../../user/user.entity';
import { define } from 'typeorm-seeding';

define(User, (faker: Faker) => {
  const user = new User();
  const firstName = faker.name.firstName();
  user.email = `${firstName}@gmail.com`;
  user.firstName = firstName;
  user.lastName = faker.name.lastName();
  user.phoneNumber = '0899999999';

  return user;
});
