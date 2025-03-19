var agora = new Date()
var hora = agora.getHours()

if (hora >= 12 && hora < 18){
    console.log(`São ${hora} Horas, Boa Tarde!`)
}else if(hora >= 6 && hora <= 11) {
    console.log(`São ${hora} Horas, Bom Dia!`)
}else if(hora >= 18 && hora < 24) {
    console.log(`São ${hora} Horas, Boa Noite!`)
}else if(hora < 6){
    console.log(`São ${hora} Horas, Boa Madrugada!`)
}
