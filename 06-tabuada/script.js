'use strict'

function gerarTabuada(){
    const Numero = document.getElementById('numero')
    const Resultado = document.getElementById('resultado')


    Resultado.replaceChildren()
    for (let i = 1; i <= 10; i ++){
        const ItemLista = document.createElement('tr')
        const ItemConta = document.createElement('td')
        const ItemResultado = document.createElement('td')

        ItemConta.textContent = Numero.value + "x" + i
        ItemResultado.textContent = Numero.value * i;
        
        Resultado.appendChild(ItemLista)
        ItemLista.appendChild(ItemConta)
        ItemLista.appendChild(ItemResultado)
    }
}