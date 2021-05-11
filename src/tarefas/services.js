const lista_de_tarefas = require('./listaTarefas')

let nextId = lista_de_tarefas.length + 1;

class Service {

    adicionar(tarefa) {
        tarefa.id = nextId++;
        lista_de_tarefas.push(tarefa);
    }

    listar() {
        console.log("entrou no service listar")
        return lista_de_tarefas;
    }
    listarPorId(index) {
        return lista_de_tarefas[index - 1];
    }

    atualizar(tarefaNova){
        const tarefaAntiga = this.listarPorId(tarefaNova.id);
        tarefaAntiga.texto = tarefaNova.texto;
        tarefaAntiga.status = tarefaNova.status;
    }
    deletar(id) {
        if (!this.listarPorId(id)) {
            return false;
        }
        for (let i = 0; i < lista_de_tarefas.length; i++) {
            if (lista_de_tarefas[i].id == id) {
                lista_de_tarefas.splice(i, 1)
            }
            return true;
        }
    }
}

const TarefasService = new Service()

module.exports = TarefasService;

// return TASK_LIST.find(task => task.id === +id);