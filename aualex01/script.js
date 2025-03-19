function clicou() {
    var idade = document.getElementById('idade').value
    var resultado = document.getElementById('res')
    var data = new Date()
    var ano = data.getUTCFullYear()

    if (idade === "" || isNaN(idade)) {
        resultado.innerHTML = "Por favor, insira um ano válido."
        return
    }

    var i = ano - Number(idade)

    resultado.innerHTML = `Sua idade é ${i} anos`


}