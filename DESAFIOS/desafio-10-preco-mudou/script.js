function verificar() {
    var nome = window.prompt('Qual é o produto que deseja consultar?')
    var preco_ant = window.prompt(`Qual era o preço anterior de ${nome}?`)
    var preco_atu = window.prompt(`Qual é o preço atual de ${nome}?`)
    var ant = Number(preco_ant)
    var novo = Number(preco_atu)
    var dif_mais = novo - ant
    var dif_menos = ant - novo
    var aum = ((novo - ant) / ant) * 100
    var dim = ((ant - novo) / ant) * 100
    var antes = ant.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var depois = novo.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var difm = dif_menos.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var dif = dif_mais.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var res = window.document.getElementById('res')
    if (ant < novo) {
        res.innerHTML = `<h1>Analisando os valores informados de ${nome}.</h1>
        <p>O produto ${nome} custava ${antes} e agora custa ${depois}.</p>
        <p>Hoje o produto está mais caro.</p>
        <p>O preço subiu ${dif} em relação ao preço anterior.</p>
        <p>Uma variação de ${aum.toFixed(1)}% pra cima.</p>`
    } else if(ant > novo) {
        res.innerHTML = `<h1>Analisando os valores informados de ${nome}.</h1>
        <p><p>O produto ${nome} custava ${antes} e agora custa ${depois}.</p></p>
        <p>Hoje o produto está mais barato.</p>
        <p>O preço caiu ${difm} em relação ao preço anterior.</p>
        <p>Uma variação de ${dim.toFixed(2)}% pra baixo.</p>`
    } else {

    }

}