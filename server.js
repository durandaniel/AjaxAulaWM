const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) //nesse midlware - os arquivos estáticos serão servidos pelo express dentro da pasta atual (no caso iniciará pelo index) -- è importantíssimo colocar, porque ele serve a pasta atual, caso contrário ele retorna cannot GET.. tente fazer comentando esse código - #253 -1:10
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json()) //será aplicado a qualquer requisição que chegar no servidor

app.get('/teste', (req, res) => res.send('OK'))

app.listen(8081, () => console.log('Executando na porta 8081'))