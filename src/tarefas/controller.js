const TarefasService = require("./services");

class Controller{
    listar(req, res){
        console.log("entrou no controller listar")
        const tarefas = TarefasService.listar()
        console.log(tarefas)
        res.json(tarefas);
    }
    listarPorId(req,res){
        const tarefa = TarefasService.listarPorId(req.params.id)
        res.json({tarefa})
    }
    adicionar(req, res){
        const texto = req.body.texto;
        const status = req.body.status;
        const id = req.body.id;
        const novaTarefa = {texto, status, id}
        TarefasService.adicionar(novaTarefa)
        res.json({"success": true})
    }
    deletar(req, res){
        const id = req.params.id;
        const status = TarefasService.deletar(id);
        res.json({"success": status})
    }

    atualizar(req, res){
        const TarefaNova = {
            id: req.params.id,
            texto: req.body.texto,
            status: req.body.status
        }

        TarefasService.atualizar(TarefaNova);
        res.json({"success": true})
    }

}



const TarefasController = new Controller()

module.exports = TarefasController;

/*if (novaTarefa.text.length == 0) {
    res.json({ "error": "Invalid text" })
  } else if (novaTarefa.text.length == 1) {
    res.json({ "error": "The text must have more than one letter" })
  } else {
    res.json({ "success": true })
    TarefaService.save(novaTarefa)
  }*/