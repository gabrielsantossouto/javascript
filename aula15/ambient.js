let num = [5,8,9,3]
num.push(2)
num.sort()
console.log(`o primeiro valor do vetor é ${num[0]}`)
console.log(num)
console.log(`o vetor tem ${num.length} posições`)


let pos = num.indexOf(4)
if (pos == -1){
    console.log('ERRO')
}else{
    console.log(pos)
}