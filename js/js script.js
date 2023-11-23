//REPETICOES
//WHILE (VERIFICA E DEPOIS FAZ)
var contador = 0;
// enquanto (condicao) faca
//contador + 1
//fimEnquanto
while (contador <=10){
console.log(contador);
//contador++ pode ser usado ao inves de contador + 1
contador= contador + 1;
}

// DO WHILE (FAZ E VERIFICA)
// REPITA
//
//CONTADOR
//ATE(CONDICAO)

var cont = 20
do{
console.log(`FIZ ${cont}VEZES`);
cont++;
}while(cont <=10);

// FOR
//PARA (VAR, CONDICAO, CONTROLADOR)
//FIMPARA
for(let controlador = 1; controlador <=10; controlador++){
console.log(contolador+" - For é legal")
}


//FOR EACH
console.log("ELEMENTOS");
var elementos = ["ELEMENTO1", "ELEMENTO2", "ELEMENTO3"];
//function psedofunction, anonima
elementos.forEach((cadaElemento) => {
console.log("-"+cadaElemento);
});