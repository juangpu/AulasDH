const express = require('express')
const olaRotas = require('./routers/ola')
const produtosRotas = require('./routers/produtos')
const app = express()
const port = 4000

app.use('/saudacao', olaRotas)
app.use('/produtos', produtosRotas)

app.listen(port, () => console.log('Listen on ' + port))