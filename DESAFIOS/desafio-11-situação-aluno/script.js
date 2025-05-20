function verificar() {
    var nome = window.prompt('Qual o nome do aluno?')
    var pv1 = window.prompt(`Primeira nota de ${nome}?`)
    var pv2 = window.prompt(`Segunda nota de ${nome}?`)
    var p1 = Number(pv1)
    var p2 = Number(pv2)
    var media = ((p1 + p2) / 2)
    var res = window.document.getElementById('res')

    if (media > 6) {
        res.innerHTML = `<h1>Analisando a situação de ${nome}</h1>
    <p>Com as notas ${p1} e ${p2}, a <strong>média é ${media.toFixed(1)}</strong></p>
    <p>Com a média acima de 6.0, o aluno está <span style="background: green"><strong>APROVADO</strong></span></p>`
        
    } else if (media > 3) {
        res.innerHTML = `<h1>Analisando a situação de ${nome}</h1>
    <p>Com as notas ${p1} e ${p2}, a <strong>média é ${media.toFixed(1)}</strong></p>
    <p>Com a média entre de 3.0 e 6.0, o aluno está em <span style="background: orange"><strong>RECUPEREÇÃO</strong></span></p>`
    } else {
        res.innerHTML = `<h1>Analisando a situação de ${nome}</h1>
    <p>Com as notas ${p1} e ${p2}, a <strong>média é ${media.toFixed(1)}</strong></p>
    <p>Com a média abaixo de 3.0, o aluno está <span style="background: red"><strong>REPROVADO</strong></span></p>`
    }


}