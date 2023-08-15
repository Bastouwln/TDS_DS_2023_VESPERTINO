const { REPL_MODE_STRICT } = require('repl');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function loading(){
    setTimeout(function() {
        console.clear();
        console.log("loading... 0%");
      }, 1000);


      setTimeout(function() {
        console.clear();
        console.log("loading... 25%");
      }, 2000);


      setTimeout(function() {
        console.clear();
        console.log("loading... 30%");
      }, 3000);


      setTimeout(function() {
        console.clear();
        console.log("loading... 45%");
      }, 4000);


      setTimeout(function() {
        console.clear();
        console.log("loading... 50%");
      }, 4500);
      setTimeout(function() {
        console.clear();
        console.log("loading... 65%");
      }, 5000);

      setTimeout(function() {
        console.clear();
        console.log("loading... 70%");
      }, 5500);

      setTimeout(function() {
        console.clear();
        console.log("loading... 80%");
      }, 6000);

      setTimeout(function() {
        console.clear();
        console.log("loading... 90%");
      }, 6400);

      setTimeout(function() {
        console.clear();
        console.log("loading... 100%");
      }, 6500);
      setTimeout(function() {
        console.clear();
        console.log("Pronto!");
      }, 6550);
      setTimeout(function() {
        console.clear();
        campoMinado();
      }, 6550);
  }
  function jogar(){
    setTimeout(function jogarMain(){
    console.clear();
    readline.question("Deseja jogar? s/n ", resposta => {
        if(resposta == "s"){
            campoMinado();
        }
        else if(resposta == "n"){
            setTimeout(function() {
                console.log("aw :(");
              }, 1500);
              setTimeout(function() {
                console.clear();
                console.log("Tchau então :(");
              }, 2500);
            console.clear();
        }else{
            jogar()
        }
        readline.close();
      });
    }, 2000);
}




function welcomeMinado(){
    console.clear();
    setTimeout(function() {
        console.log("Bem vindo!");
      }, 1000);
    jogar()
}




function campoMinado(){


var sorteio = [sorteio,sorteio,sorteio,sorteio,sorteio,sorteio,sorteio,sorteio,sorteio];
var bomba = false;




function randomNumbers(){
sorteio[0] = Math.floor(Math.random() * 2) + 1;
sorteio[1] = Math.floor(Math.random() *2) + 1;
sorteio[2] = Math.floor(Math.random() *2) + 1;
sorteio[3] = Math.floor(Math.random() *2) + 1;
sorteio[4] = Math.floor(Math.random() *2) + 1;
sorteio[5] = Math.floor(Math.random() *2) + 1;
sorteio[6] = Math.floor(Math.random() *2) + 1;
sorteio[7] = Math.floor(Math.random() *2) + 1;
sorteio[8] = Math.floor(Math.random() *2) + 1;
for(var i = 0; i<9; i++){
    if(sorteio[i] > 1){
        bomba = true;
        if(bomba == true){
            sorteio[i] = "💣";
        }
    }
    else{
        sorteio[i] = "😊";
    }
}
}






randomNumbers();



console.log("    - 1  ", " 2  ", " 3  ")

matriz = [" ", " ", " ", " ", " ", " ", " ", " "," "];

for(var i=0; i<9; i++){
    matriz[i] = "🟤"
}

console.log("1 - ", matriz[0], " ", matriz[1], " ", matriz[2]);
console.log ("2 - ", matriz[3], " ", matriz[4], " ", matriz[5]);
console.log ("3 - ", matriz[6], " ", matriz[7], " ", matriz[8]);

readline.question("Escolha Um número 1 - 9! ", resposta1 => {
  console.log("asdasdas", resposta1)
}
)

}

welcomeMinado();