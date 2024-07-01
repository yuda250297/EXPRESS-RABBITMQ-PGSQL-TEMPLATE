import { Sequelize } from 'sequelize';
import User from './user';
import Product from './product';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
    process.env.DB_DATABASE as string,
    process.env.DB_USERNAME as string,
    process.env.DB_PASSWORD as string,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT as 'postgres' | 'mysql' | 'sqlite' | 'mariadb' | 'mssql'
    }
);

User.initialize(sequelize);
Product.initialize(sequelize);

export { sequelize, User, Product };
