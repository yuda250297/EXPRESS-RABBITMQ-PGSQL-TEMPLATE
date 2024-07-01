import { DataTypes, Model, Sequelize } from 'sequelize';

class Product extends Model {
    public id!: number;
    public name!: string;
    public price!: number;
    public description!: string;

    static initialize(sequelize: Sequelize) {
        Product.init(
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
                price: {
                    type: DataTypes.FLOAT,
                    allowNull: false,
                },
                description: {
                    type: new DataTypes.STRING(256),
                    allowNull: true,
                },
            },
            {
                tableName: 'products',
                sequelize,
            }
        );
    }
}

export default Product;
