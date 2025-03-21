let num = document.querySelector('input#num')
let lista = document.querySelector('select#flist')
let res = document.getElementById('resultado')
let valores = []

function isNumero (n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    }else {
        window.alert('[ERRO] Valor invalido ou ja encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0){
        window.alert('[ERRO] Falta de dados')
    } else {
        let tot = valores.length


        res.innerHTML = ''
        res.innerHTML += `temos ${tot} valores`
    }
}