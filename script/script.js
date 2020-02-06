let btnAddTarefa = document.getElementById("adicionar-tarefa")
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector('#tarefa-digitada')
let listasTarefas = localStorage.getItem('listaTarefas')?JSON.parse(localStorage.getItem('listaTarefas')):[]



const salvarLocalStorange = tarefas => {
    let tarefasEmJson = JSON.stringify(tarefas)
    localStorage.setItem("listaTarefas", tarefasEmJson)
    console.log("Lista de tarefas salva com sucesso!");

}



const mostrarNaTela = arrayTarefas =>{
    arrayTarefas.forEach(textoTarefa => {
        let tarefaNova = `<div class="col-md-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${textoTarefa} 
            </div>
            <div class="botao-tarefa">
                <img src="imagens/check.png" width="50" alt="Botão para finalizar tarefa"
                    title="Botão para finalizar tarefa">
            </div>
        </div>
        </div>
        </div> `

        tarefas.insertAdjacentHTML('beforeend', tarefaNova)
        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild.onclick = (event) => {

            tarefas.removeChild(event.target.parentNode.parentNode.parentNode)
            listasTarefas = listasTarefas.filter(valor =>valor != textoTarefa)

            salvarLocalStorange(listasTarefas)

        }

    })
}

mostrarNaTela(listasTarefas)

const criarTarefaComEnter = (event) => {

    if (event.keyCode == 13 || event.type == "click") {

        let valorDigitado = inputTarefa.value
        if (valorDigitado == "") {
            alert("Você deve digitar uma tarefa primeiro!")
            return
        }

        listasTarefas.push(valorDigitado);
        salvarLocalStorange(listasTarefas)
        inputTarefa.value = ""
        let tarefaNova = `<div class="col-md-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${valorDigitado} 
            </div>
            <div class="botao-tarefa">
                <img src="imagens/check.png" width="50" alt="Botão para finalizar tarefa"
                    title="Botão para finalizar tarefa">
            </div>
        </div>
        </div>
        </div> `

        tarefas.insertAdjacentHTML('beforeend', tarefaNova)
        let objTarefaNova = tarefas.lastElementChild
        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild.onclick = (event) => {

            tarefas.removeChild(event.target.parentNode.parentNode.parentNode)
            listasTarefas = listasTarefas.filter(valor =>valor != textoTarefa)

            salvarLocalStorange(listasTarefas)
        }


    }
}


inputTarefa.addEventListener('keypress', criarTarefaComEnter)
btnAddTarefa.addEventListener('click', criarTarefaComEnter)








