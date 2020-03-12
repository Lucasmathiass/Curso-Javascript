//js orientado a objetos\\
//this faz referencia a uma atributo ou metodo

//criando classe
//variavel morre dentro da classe, n é possivel acessar fora
//é preciso promove-la a atributo
var Celular = function(){
    this.cor = "red";
    

    //metodo

    this.ligar = function()
    {
        console.log("ligação")
        return "Ligando...";
    }
}

//instanciando

var objeto = new Celular();
objeto.cor
console.log(objeto.ligar())