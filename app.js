const express = require("express")
const ejs = require("ejs")
const bodyParser = require("body-parser")
const router = express.Router()
const app = express()

app.use(bodyParser.urlencoded({"extended": true}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

require("./app/routes")(app,router)

app.use(function (err, req, res, next) {
    console.log(err)
    return res.status(err.code).send(err.message)
})

module.exports = app