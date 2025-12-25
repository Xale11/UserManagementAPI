import dotenv from "dotenv";

dotenv.config();

interface Config {
    port: number;
    nodeEnv: string;
    dbUser: string;
    dbPassword: string;
    dbHost: string;
    dbPort: number;
    dbName: string;
}

const config: Config = {
    port: Number(process.env.SERVER_PORT || 3000),
    nodeEnv: process.env.NODE_ENV || "development",
    dbUser: process.env.DB_USER || "postgres",
    dbPassword: process.env.DB_PASSWORD || "",
    dbHost: process.env.DB_HOST || "localhost",
    dbPort: Number(process.env.DB_PORT || 5432),
    dbName: process.env.DB_NAME || "postgres",
}

export default config;