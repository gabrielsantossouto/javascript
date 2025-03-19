


function carregar() {

    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 0 && hora <12) {

        img.src = 'dia.jpg'
        document.body.style.background = '#EE8434'

    }else if(hora >= 12 && hora <= 18) {

        document.body.style.background = '#C95D63'
        img.src = 'tarde.jpg'

    } else {

        img.src = 'noite.jpg'
        document.body.style.background = '#496DDB'
        
    }

}
