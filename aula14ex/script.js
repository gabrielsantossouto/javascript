function clicou() {
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passos')
    var resultado = document.getElementById('res')


    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!')
    }else{
        resultado.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        for (let c = i;c <= f; c += p) {
            resultado.innerHTML += `${c} `
        }
    }
}