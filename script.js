//Retornando a hora
let horas = new Date()
document.write(horas.getHours());
document.write("<br></br>")

//Retornando os minutos
let minutos = new Date()
document.write(minutos.getMinutes());
document.write("<br></br>")

//Retornando os segundos
let segundos = new Date()
document.write(segundos.getSeconds());
document.write("<br></br>")

//Alterando data
let horas1 = new Date()
horas1.setHours(horas1.getHours()+3);   
document.write(horas1.getHours());
document.write("<br></br>")

//Alterando minutos
let minutos1 = new Date()
minutos1.setMinutes(minutos1.getMinutes()+3);   
document.write(minutos1.getMinutes());
document.write("<br></br>")

//Usando o setTimeout
function BemVindo(){
    alert("Ola Seja Bem vindo!")
}
setTimeout(BemVindo,1000)
document.write("<br></br>")

