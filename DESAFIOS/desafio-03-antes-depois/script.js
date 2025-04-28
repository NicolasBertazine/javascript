function calcular() {
    var numero = window.prompt('Digite um número inteiro:')
    var num = Number(numero)
    var ant = num - 1
    var dep = num + 1
    window.alert(`Antes do ${num}, tem o número ${ant}.\n Depois do ${num}, tem o número ${dep}.`)  
}