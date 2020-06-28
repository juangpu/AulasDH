const { request, response } = require("express")

const controller = {
    show: (request, response) => {
        response.send('Você está na tela do produto ' + request.params.nome_produto)
    }
}

module.exports = controller