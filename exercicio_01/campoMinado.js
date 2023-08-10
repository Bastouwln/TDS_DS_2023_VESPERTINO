const { clear } = require('console');

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
            loading();
        }
        else if(resposta == "n"){
            setTimeout(function() {
                console.log("aw :(");
              }, 1500);
              setTimeout(function() {
                console.clear();
                console.log("Tchau então :(");
              }, 2500);
              readline.close();
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

console.log(sorteio[0], " ", sorteio[1], " ", sorteio[2]);
console.log (sorteio[3], " ", sorteio[4], " ", sorteio[5]);
console.log (sorteio[6], " ", sorteio[7], " ", sorteio[8]);


}

welcomeMinado();