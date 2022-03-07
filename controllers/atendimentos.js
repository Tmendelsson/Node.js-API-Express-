const atendimentos = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        atendimentos.lista(res)

    })
    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        Atendimento.buscaPorId(id, res)
    })
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body

       atendimento.adiciona(atendimento, res)
    })
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body
    })
    app.delete('/atendimentos/:id', (req,res) => {
        const id = parseInt(req.params.id)
        Atendimento.deleta(id,res)
    })
    

}