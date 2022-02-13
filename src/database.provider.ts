import { createConnection } from "typeorm";
import { User } from "./user/user.entity";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'sqlite',
            database: 'db.sqlite',
            entities: [User],
            synchronize: true
        })
    }
]