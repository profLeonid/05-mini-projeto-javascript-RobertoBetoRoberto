'use strict'

function simularFinanciamento(){
    const ValorTotal = document.getElementById('valor-total')
    const TaxaJuros = document.getElementById('taxa-juros')
    const QuantidadeParcelas = document.getElementById('quantidade-parcelas')
    const ValorParcela = document.getElementById('valor-parcela')
    const Resultado = document.getElementById('resultado')

    let SaldoDevedor = Number(ValorTotal.value)

    Resultado.replaceChildren()

    for (let i = 1; i <= Number(QuantidadeParcelas.value); i ++){
        const ItemLista = document.createElement('tr')
        const ItemMes = document.createElement('td')
        const ItemJurosMes = document.createElement('td')
        const ItemValorParcela = document.createElement('td')
        const ItemTotalMes = document.createElement('td')
        const ItemSaldoDevedor = document.createElement('td')

        let JurosMes = SaldoDevedor / 100 * Number(TaxaJuros.value)
        SaldoDevedor = SaldoDevedor + JurosMes - Number(ValorParcela.value) 
        let ValorMes = Number(ValorParcela.value) + JurosMes



        ItemMes.textContent = i
        ItemJurosMes.textContent = JurosMes.toFixed(2).replace('.', ',')
        ItemValorParcela.textContent = Number(ValorParcela.value).toFixed(2).replace('.', ',')
        ItemTotalMes.textContent = ValorMes.toFixed(2).replace('.', ',')
        ItemSaldoDevedor.textContent = SaldoDevedor.toFixed(2).replace('.', ',')

        Resultado.appendChild(ItemLista)
        ItemLista.appendChild(ItemMes)
        ItemLista.appendChild(ItemJurosMes)
        ItemLista.appendChild(ItemValorParcela)
        ItemLista.appendChild(ItemTotalMes)
        ItemLista.appendChild(ItemSaldoDevedor)
    }
}