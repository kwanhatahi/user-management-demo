import {
  Entity,
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @PrimaryGeneratedColumn('identity', {
    generatedIdentity: 'ALWAYS',
  })
  public no: number;

  @Column({ type: 'varchar', length: 255, collation: 'th-x-icu' })
  firstName: string;

  @Column({ type: 'varchar', length: 255, collation: 'th-x-icu' })
  lastName: string;

  @Column()
  email: string;

  @Column({ type: 'varchar', length: 100 })
  phoneNumber!: string;
}
