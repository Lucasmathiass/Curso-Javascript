//eval() avaliara a expressao. é uma expressao? é outra instrucao?
function somar(x1,x2,op){
    return eval(`${x1} ${op} ${x2}`);
}

let resultado = somar(2,5, "+");
console.log(resultado);

//funcao anonima 

var func = function(a,b){
return a+b;
}
console.log(func(2,3));

//arraw function

let calc = (a,b) =>{
    return eval(a + b);
}

console.log(calc(1,2))

/*var obj = window;
for(var values in obj){
    console.log(values)
}
*/

// dom eventos
// window manipula a aplicaçao em geral
//nova janela: window.open("oi")
window.addEventListener('focus', event =>{
    console.log("foque")
})

document.addEventListener('click', event =>{
    console.log("Me piticou")
})

//trabalhandocom datas
// usando a classe date

//let agora = Date.now();
//mostra o timestamp, ou seja, a quantidade de segundos desde 1970(unix)
//formatando data
let now = new Date();

//gets: getFullYear, getDate, getMonth
console.log(now.getMonth())

//localizacao

console.log(now.toLocaleDateString("pt-BR"))
//mostrara data no formato brasileiro/ 11/02/1998