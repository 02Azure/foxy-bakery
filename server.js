const express = require('express')
const app = express()
const session = require("express-session")
const port = 3000
const index = require("./routes/index-route")

app.set("view engine", "ejs")

app.use(session({
  secret: 'foxybakery',
  resave: false,
  saveUninitialized: true
}))


app.use(express.urlencoded({extended: true}))
app.use("/public", express.static("public"))

app.use("/", index)

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}...`)
})
