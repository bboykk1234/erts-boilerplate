import {Table, Column, Model} from 'sequelize-typescript';
import Database from 'Database';


@Table({
    tableName: "Users"
})
export class User extends Model<User> {

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;
}

Database.addModels([User]);