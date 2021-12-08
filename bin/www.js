const app = require("../app")
const http = require("http")

const httpServer = http.createServer(app)
const PORT = process.env.PORT || 8200
httpServer.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})