import express from "express";
import router from "./routes/index.js";
import { errorMiddleware } from "./middleware/errorHandler.js";

const app = express();

app.use(express.json());
app.use(router)
app.use(errorMiddleware)

export default app;