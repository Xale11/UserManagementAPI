import app from "./app.js"
import config from "./config/config.js"

const startServer = () => {
    app.listen(config.port, () => console.log(`Listening on port ${config.port}`))
}

startServer();