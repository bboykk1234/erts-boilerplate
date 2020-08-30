import {Table, Column, Model} from 'sequelize-typescript';


@Table({
    tableName: "Users"
})
export default class User extends Model<User> {

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;
}
