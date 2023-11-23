//var produto1 = "Tenis";
//var produto2 = "Bola";
//var produto3 = "VideoGame";
//ARRAY
var estoqueProdutos = ["Tenis","Bola","VideoGame"];
console.log(estoqueProdutos);
//indice
console.log(estoqueProdutos[1])
//metodo alternativo
//var frutas = Array();
//frutas[0]= "Banana";
//frutas[1]= "Abacaxi";
//frutas[2]= "Laranja";
//console.log(frutas);

//COMANDOS ARRAY
//push - adiciona um elento na ultima posicao
estoqueProdutos.push("Chocolate");
console.log(estoqueProdutos);
//unshift - adiciona um elemento na primeira posicao
estoqueProdutos.unshift("Refrigerante");
console.log(estoqueProdutos);
//pop - remover um elemento na ultima posicao
estoqueProdutos.pop();
console.log(estoqueProdutos);
//shift - remove o primeiro elemento de uma array
estoqueProdutos.shift();
console.log(estoqueProdutos);
//splice - (indice, quantos indices, novo elento)
estoqueProdutos.splice(1,0,"Chocolate");
console.log(estoqueProdutos);
//length - quantidade de elementos no array
console.log(`Existem ${estoqueProdutos.length}no estoque`);
//includes - busca um item no array
console.log(estoqueProdutos.includes("Chocolate"));