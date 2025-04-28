function calcular() {
    var produto = window.prompt('Qual o nome do produto:')
    var pre = window.prompt(`Qual o valor do produto ${produto}:`)
    var preco = Number(pre)
    var prec= preco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var din = window.prompt(`Se o produto ${produto}, custa ${prec}, qual o valor que deseja dar em dinheiro:`)
    var dinheiro = Number(din)
    var dinh = dinheiro.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    var troco = dinheiro - preco
    var tro = troco.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
    window.alert(`Você comprou ${produto}, que custou ${prec}.\nVocê deu ${dinh} em dinheiro e vai receber ${tro} de troco.\nVolte sempre! `)
}