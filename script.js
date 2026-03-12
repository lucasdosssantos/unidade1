function Razao(){

let a = document.getElementById("r1").value
let b = document.getElementById("r2").value

if(a === "" || b === ""){
document.getElementById("resRazao").innerHTML = "Preencha todos os valores"
return
}

a = Number(a)
b = Number(b)

if(b == 0){
document.getElementById("resRazao").innerHTML = "Não é possível dividir por 0"
return
}

function mdc(x, y){
while(y != 0){
let resto = x % y
x = y
y = resto
}
return x
}

let divisor = mdc(a,b)

let aS = a/divisor
let bS = b/divisor

let decimal = a/b

document.getElementById("resRazao").innerHTML =
"Razão simplificada: " + aS + ":" + bS +
"<br>Decimal: " + decimal

}

function Regra3(){

let a = document.getElementById("a").value
let b = document.getElementById("b").value
let c = document.getElementById("c").value

if(a === "" || b === "" || c === ""){
document.getElementById("resRegra").innerHTML = "Preencha todos os valores"
return
}

a = Number(a)
b = Number(b)
c = Number(c)

let x = (b*c)/a

document.getElementById("resRegra").innerHTML =
"X = " + x

}

function Porcentagem(){

let p = document.getElementById("p").value
let n = document.getElementById("n").value

if(p === "" || n === ""){
document.getElementById("resPorcentagem").innerHTML = "Preencha todos os valores"
return
}

p = Number(p)
n = Number(n)

let resultado = (p/100)*n

document.getElementById("resPorcentagem").innerHTML =
"Resultado = " + resultado

}

function Aumento(){

let valor = document.getElementById("valorAumento").value
let perc = document.getElementById("percAumento").value

if(valor === "" || perc === ""){
document.getElementById("resAumento").innerHTML = "Preencha todos os valores"
return
}

valor = Number(valor)
perc = Number(perc)

let resultado = valor + (valor * perc /100)

document.getElementById("resAumento").innerHTML =
"Novo valor = " + resultado

}

function Desconto(){

let valor = document.getElementById("valorDesconto").value
let perc = document.getElementById("percDesconto").value

if(valor === "" || perc === ""){
document.getElementById("resDesconto").innerHTML = "Preencha todos os valores"
return
}

valor = Number(valor)
perc = Number(perc)

let resultado = valor - (valor * perc /100)

document.getElementById("resDesconto").innerHTML =
"Valor com desconto = " + resultado

}