function calcular () {
    var met = window.prompt('Digite uma distancia em metros (m)')
    var metros = Number(met)
    var km = metros / 1000
    var hm = metros / 100
    var dam = metros / 10
    var dm = metros * 10
    var cm = metros * 100
    var mm = metros * 1000
    var res = window.document.getElementById('res')
    var art = window.document.getElementsByTagName('article')
    art.innerHeight = 900
    res.innerHTML = `<h1>A distância de ${metros} metros, corresponde a...</h1>
                     <p>${km} quilômetros (Km)</p>
                     <p>${hm} hectômetros (Hm)</p>
                     <p>${dam} decâmetros (Dam)</p>
                     <p>${dm} decímetros (dm)</p>
                     <p>${cm} centímetros (cm)</p>
                     <p>${mm} milímetros (mm)</p>`   
                     
}
