function desconto() {
    var produto = window.prompt('Qual é o produto que você está comprando?')
    var valor = window.prompt(`Qual é o preço de ${produto}?`)
    var val = Number(valor)
    var por = 10
    var desconto = (por / 100) * val
    var valorfinal = valor - desconto
    var val = val.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var desconto = desconto.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var valorfinal = valorfinal.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var res = window.document.getElementById('res')
    res.innerHTML = `<h1>Calculando desconto de 10% para ${produto}</h1>
                     <p>O preço original era ${val}.</p>
                     <p>Você acaba de ganhar ${desconto} de desconto(-10%).</p>
                     <p>No fim, você vai pagar ${valorfinal} no produto ${produto}.</p>`
    
}