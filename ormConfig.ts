import { SqlServerConnectionOptions } from "typeorm/driver/sqlserver/SqlServerConnectionOptions";

const config: SqlServerConnectionOptions = {
    type: 'mssql',
    host: 'localhost',
    username: 'datavanced',
    password: '123',
    database: 'PropertiesDB',
    // host: 'SPARROW',
    // username: 'genit',
    // password: 'genit2016',
    // database: 'nestCommerce',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: false,
    migrations: ['dist/src/db/migrations/*.js'],
    cli: {
        migrationsDir: 'src/db/migrations'
    }
}

export default config;