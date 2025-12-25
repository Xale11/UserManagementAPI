import { Pool } from "pg"
import config from "../config/config.js"

export const db = new Pool({
    user: config.dbUser,
    host: config.dbHost,
    database: config.dbName,
    password: config.dbPassword,
    port: config.dbPort,
})