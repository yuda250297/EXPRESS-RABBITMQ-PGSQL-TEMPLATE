import { DataTypes, Model, Sequelize } from 'sequelize';

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;

    static initialize(sequelize: Sequelize) {
        User.init(
            {
                id: {
                    type: DataTypes.INTEGER.UNSIGNED,
                    autoIncrement: true,
                    primaryKey: true,
                },
                name: {
                    type: new DataTypes.STRING(128),
                    allowNull: false,
                },
                email: {
                    type: new DataTypes.STRING(128),
                    allowNull: false,
                },
            },
            {
                tableName: 'users',
                sequelize,
            }
        );
    }
}

export default User;
