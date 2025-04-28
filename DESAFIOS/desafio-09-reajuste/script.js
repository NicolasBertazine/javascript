function calcular(){
    var nome = window.prompt('Qual é o nome do funcionário?')
    var salario = window.prompt(`Qual o salário de ${nome}?`)
    var porcentagem = window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`)
    var sala = Number(salario)
    var porcen = Number(porcentagem)
    var dif = (porcen / 100) * sala
    var aum = sala + dif
    var sal = sala.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var dif = dif.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var aum = aum.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var res = window.document.getElementById('res')
    res.innerHTML = `<h3>${nome} recebeu um aumento salárial!</h3>
                     <p>O salário era ${sal}.</p>
                     <p>Com um aumento de ${porcen}%, o salário vai aumentar ${dif} no próximo mês.</p>
                     <p>E a partir daí, ${nome} vai passar a ganhar ${aum}.</p>`

}