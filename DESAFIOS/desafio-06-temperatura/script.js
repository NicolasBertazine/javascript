function converter(){
    var celsius = window.prompt('Digite uma temperatura em Celsius')
    var cel = Number(celsius)
    var fah = (cel * 9/5) + 32
    var kel = cel + 273.15
    var res = window.document.getElementById('res')
    res.innerHTML = `<h1>A temperatura de ${cel}&deg;C, corresponde a...</h1>
                     <p>${kel(2)}&deg;K (Kelvin)</p>
                     <p>${fah}&deg;F (Fahrenheit)</p>`
}