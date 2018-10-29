/* 
  melhor implementação para o loop do exemplo
  pode-se usar um while ao invés do for, no
  for a toda iteração é verificada a condição : j < arr.length
  já usando while é irá decrementando variável max, que no exemplo 
  abaixo receber array.length
 */
const array = [1, 2, 3, 4, 5];
let max = array.length;
while (max--) {
  console.log("executando alguma coisa");
}
