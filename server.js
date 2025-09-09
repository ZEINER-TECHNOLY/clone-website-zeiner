const express = require('express')
const path = require('path')
const port = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('index', {nome: 'Quimbuadi'})
})

app.listen(port, () => {
    console.log(`Servidor rodando no endereço: http://localhost:${port}`)
})
