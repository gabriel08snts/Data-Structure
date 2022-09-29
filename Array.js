const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

//A INDEXAÇÃO (INDEX) COMEÇA PELO NÚMERO 0;
console.log(pilotos[0]) //SENNA
console.log(pilotos[3]) //HAMILTON

//ACESSAR O TAMANHO DO ARRAY;
console.log(pilotos.length)

//ITERÁVEL(SIGNIFICA QUE PODE SER USADO NO 'FOR OF');
for (let pilotos of pilotos) {
  console.log(pilosto)
}

//ADICIONAR ELEMENTO;
pilotos.push('Alonso')
console.log(pilotos)

//ENCONTRAR UM ELEMENTO;
const senna = pilostos.find(piloto => pilotos === 'Senna')
console.log(senna)

//DELETAR UM ELEMENTO;
pilostos.splice(1, 1)
console.log(pilotos)
