// let teste = function () {
//     console.log('ola mundo');

// }

// teste();

//  function showfuncition(successCallback, errorCallback){
//     if (true) {
//         successCallback('requisiçao bem sucedida');

//     }else
//     {
//         errorCallback('erro na requisiçao');

//     }

//  } 


//  let successCallback = function(message){
//     console.log(message);

//  }
//  let errorCallback = function(message){
//     console.error(message);

//  }

// let sum = 0 
// const arr = [10, 20, 30, 40]

// function somaDeTodosOsValores(sum){

//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i]

//     }
//     return sum;
// }

// console.log(somaDeTodosOsValores(sum));


// maior numero de um array


// function findaMax(arr) {
//     let max = arr[0]

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > max){
//             max = arr[i]
//         }

//     }
//     return max;
// }

// console.log(findaMax([1,6,8,2,4,7,10]))


// inverta o array

// const array = [10, 60, 30, 40]

// let reversed = []

// function reversal(reversal) {
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversal.push(array[i])
//     }
//     return reversal;
// }

// console.log(reversal(reversed));


// crie um novo array contendo somente numeros pares 

// const arr = [2,5,6,8,9,7,10]

// let newArray = []

//  function pares(newArray) {

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] % 2 === 0){
//             newArray.push(arr[i])
//         }

//     }
//     return newArray;

// }

// console.log(pares(newArray));


// let vet = [10,10,7,5,10]
// let value = 10

// let arrOcorrencia = function(value, vet) {
    
//     let count = 0
//     for(let i = 0;i < vet.length; i++){
//         if(vet[i] === value){
//             count++
            
//         }
//     }
//     return count
// }
//     let contarOcorrencia = arrOcorrencia(value, vet)
    
// console.log(contarOcorrencia);

 
  // array multidimencionais

  
//   // console.log(matriz);
// function multi(matriz){

//     for(let i = 0; i < matriz.length; i++){
//         for(let j = 0; j < matriz[i].length; j++){
//             console.log(`o elemento na posiçao [${i}][${j}]: ${matriz[i][j]}`);
            
//         }
//     }
    
// }
// console.log(multi([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]  
    
// ]));


// soma de matrizes
// let nome = 'equipe olimpica'
// console.log('Cauan'.length);
// console.log('Cauan'.charAt(0));
// console.log(nome.indexOf('p'));

// // console.log(nome.replace('cauan','soares'));

// console.log(nome.substr(7, 8));

// console.log(nome.toUpperCase());

// console.log(nome.toLowerCase());

// console.log(nome.trim());

// matematicos

// console.log(Math.ceil(100.75))
// console.log(Math.floor(100.75))
// console.log(Math.round(100.75))
// console.log(Math.sqrt(100))
// console.log(Math.pow(10,2))
// console.log(Math.cbrt(100))
// console.log(Math.abs(100.20))
// console.log(Math.random() * 100);

//datas

// let data = new Date()
// console.log(data.getDate())
// console.log(data.getMonth()+ 1)
// console.log(data.getFullYear())

// console.log(data.toString());

// data.setDate(data.getDate()+ 720)
// console.log(data.toString());


// let date = new Date(2024, 7, 6)
// let date2 = new Date(2023, 7, 6)
// console.log(date.toString)
// console.log(date.getTime())
// console.log(date2.getTime())

// let miliSecond = Math.abs(date.getTime() - date2.getTime())
// console.log(miliSecond);

// let days = Math.ceil(miliSecond / (1000 * 60 * 60 * 24))


// console.log(days);


function reverseString(string){
return string.split("").reverse().join("")
}
console.log(reverseString("Cauan"));






