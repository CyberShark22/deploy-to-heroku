const express = require('express')
const app = express()

app.use(express.static('public'))


app.listen(process.env.port || 8080, () => console.log('All is ok!'));