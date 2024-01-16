const express = require('express')
const app = express()
const port = process.env.MONGODB_URI || 3030
const bodyParser = require("body-parser")
const cors = require('cors')
const Router=require("./src/routes/userRouter")
require("dotenv").config()
require("./src/config/db")

app.use("/", Router)
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})