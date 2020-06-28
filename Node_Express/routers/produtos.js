const express = require('express')
const router = express.Router()
const produtoController = require('../controllers/produtosController')

router.get('/', (request, response) => {
    response.end('Você está na tela de produtos!')
})

router.get('/:nome_produto', produtoController.show)

router.delete('/:nome_produto', (request, response) => {
    response.end('Você deletou o produto ' + request.params.nome_produto)
})

module.exports = router