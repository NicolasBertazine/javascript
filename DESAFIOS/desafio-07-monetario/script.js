var dolar = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')

function converter() {
    var reais = window.prompt('Quantos R$ você tem na carteira?')
    var dol = Number(dolar)
    var rel = Number(reais)
    var conv = rel / dol
    var dol = dol.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var rel = rel.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    var res = window.document.getElementById('res')
    var conv = conv.toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
    res.innerHTML = `<p>Se a cotação do dolar está ${dol}, e você tem em sua carteira ${rel}.</p>
                     <p>Você pode comprar ${conv}</p>`
}