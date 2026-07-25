import { Pool } from "pg";
import config from "../config/index.ts";

export const pool = new Pool({

    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000

});