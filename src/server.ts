import app from "./app.js"

const startServer = () => {
    app.listen(3000, () => console.log("Listening on port 3000"))
}

startServer();