const express = require('express')
const path = require('path')
const port = 3000
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))


//rota index
app.get('/', (req, res) => {
    res.render('index', {nome: 'Quimbuadi'})
})
//rota login
app.get('/login', (req, res) => {
    res.render('login')
})

//rota cadastro
app.get('/criar-conta', (req, res) => {
    res.render('cadastro')
})

//rota softwares
app.get('/softwares', (req, res) => {
    res.render('softwares')
})
//rota cursos
app.get('/cursos', (req, res) => {
    res.render('cursos')
})
//rota 

app.listen(port, () => {
    console.log(`Servidor rodando no endereço: http://localhost:${port}`)
})
