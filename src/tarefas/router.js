const express = require('express');
const TarefasController = require('./controller');
const router = express.Router();




/* Listar tarefas. */
router.get('/', TarefasController.listar)
/* Listar tarefa por id. */
router.get('/:id', TarefasController.listarPorId)
/* Adicionar tarefa. */
router.post('/', TarefasController.adicionar)

router.put('/:id', TarefasController.atualizar)

/* Deletar tarefa. */
router.delete('/:id', TarefasController.deletar)

module.exports = router;
