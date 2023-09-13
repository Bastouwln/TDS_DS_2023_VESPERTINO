const resposta = window.document.getElementsByClassName("catch")[0];
const resposta2 = window.document.getElementsByClassName("child")[0];
var temp = "";

function cuca(op){
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    valor1 = Number(valor1);
    valor2 = Number(valor2);


    var a = window.document.createElement("p");
    a.setAttribute("class","resultado3");
    resposta.appendChild(a);

    if(op != temp){
        clear();
    }
    var valor3
    console.log(temp)
    if(op === '+'){
        valor3 = valor1 + valor2;
        if(valor1 && valor2 == 0){
            a.innerHTML = "Ambos os valores não detectados";
        }else if(valor1 == 0){
            a.innerHTML = "Coloque o primeiro valor.";
        }else if(valor2 == 0){
            a.innerHTML = "Coloque o segundo valor.";
        }
        else{
        valor3 = String(valor3);
        a.innerHTML = "Seu valor da sua soma é : " + valor3;
        }
        
        temp = "+"
    }
    if(op =='-'){
        if(valor1 && valor2 == 0){
            a.innerHTML = "Ambos os valores não detectados";
        }else if(valor1 == 0){
            a.innerHTML = "Coloque o primeiro valor.";
        }else if(valor2 == 0){
            a.innerHTML = "Coloque o segundo valor.";
        }
        else{
        a.innerHTML = " ";
        valor3 = valor1 - valor2;
        valor3 = String(valor3);    

        a.innerHTML = "Seu valor da sua subtração é : " + valor3;
        }
        temp = "-"
    }
    if(op =='*'){
        if(valor1 && valor2 == 0){
            a.innerHTML = "Ambos os valores não detectados";
        }else if(valor1 == 0){
            a.innerHTML = "Coloque o primeiro valor.";
        }else if(valor2 == 0){
            a.innerHTML = "Coloque o segundo valor.";
        }
        else{
        valor3 = valor1 * valor2;
        valor3 = String(valor3);

        a.innerHTML = "Seu valor da sua multiplicação é : " + valor3;
        }
    }
    if(op =='/'){
        if(valor1 && valor2 == 0){
            a.innerHTML = "Ambos os valores não detectados";
        }else if(valor1 == 0){
            a.innerHTML = "Coloque o primeiro valor.";
        }else if(valor2 == 0){
            a.innerHTML = "Coloque o segundo valor.";
        }
        else{
        valor3 = valor1 / valor2;
        valor3 = String(valor3);

        a.innerHTML = "Seu valor da sua divisão é : " + valor3;
        }
    }
}
function clear(){
    resposta.innerHTML = "";
}