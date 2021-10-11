let today = new Date()
let date = new Date("2021-10-20 12:30:00")
if (date > today) {
    console.log("Evento Cadastrado com sucesso")
} else {
  console.log("Data Invalida para cadastro")  
}
    
let idade = 19
    if (idade >= 18) {
        console.log("Cadastro permitido")
    } else {
        console.log("Cadastro não permitido para menores de 18 anos")
    }
       
    let palestrantes =  ["Jose","Bia"]
    let participantes = ["João","Ana","Maria","Pedro"]
if (participantes.length < 100) {
   console.log("Cadastro completo")
} else {
    console.log("Evento Lotado")
}
console.log("Participantes até o momento: " + participantes)
console.log("Palestrantes confirmados: " + palestrantes)
