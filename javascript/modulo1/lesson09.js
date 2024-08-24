// let sum = 0 

// const arr = [10, 20, 30, 40]

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
//     sum += arr[i]

// }

// console.log(`a soma de todos os valores da listados é de ${sum}`);


// maior numero de um array

// const arr = [10, 60, 30, 40]

// let max = arr[0]

// for (let i = 0; i < arr.length; i++){
//     if (arr[i] > max){
//         max = arr[i]
//     }
// }

// console.log(max);


// inverta o array

// const array = [10, 60, 30, 40]

//  let reversed = []

//  for (let i = array.length - 1; i >= 0; i--){
//      reversal.push(array[i])
//  }
// console.log(reversed);


// crie um novo array contendo somente numeros pares 

// const arr = [2,5,6,8,9,7,10]

// let newArray = []
// for (let i = 0; i < arr.length; i++){
//     if (arr[i] % 2 === 0){
//         newArray.push(arr[i])
//     }
    
// }
// console.log(newArray);



// let ocorrencia = []

// for (let i = 0; i < arr.length; i++) {
    //     let count = 1;
    //     for (let j = i + 1; j < arr.length; j++) {
        //         if (arr[i] === arr[j]) {
            //             count++;
            //         }
            //     }
            //     if (!ocorrencia.includes(arr[i])) {
                //         ocorrencia.push({ num: arr[i], count: count });
                //     }
                
                // }
                
// console.log(ocorrencia);
  // let arr = [20,10,20,15,10,20]
  // let value = 10
  // let count = 0

  // for (let i = 0; i< arr.length; i++){
  //   if (arr[i] === value){
  //       count++
  //   }
  // }
  // console.log(arr);
  
  // console.log(`o valor de ${value} aparece ${count}`);
  
  // array multidimencionais

//   let matriz = [ 
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]  
//   ]

//   // console.log(matriz);

// for(let i = 0; i < matriz.length; i++){
//   for(let j = 0; j < matriz[i].length; j++){
//     console.log(`o elemento na posiçao [${i}][${j}]: ${matriz[i][j]}`);

//   }
// }


// soma de matrizes
let arr1 = [ 
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]  
]

let arr2 = [
  [9, 8, 7],
  [6, 5, 4],
  [3, 2, 1]
]

let resultado = []

if(arr1.length !== arr2.length || arr1[0].length !== arr2[0].length){
  throw new Error("as matrizes devem ter o mesmo tamanho")

}
  
for(let i = 0; i < arr1.length; i++){
  let somaLinha = []
  for(let j = 0; j < arr1[i].length; j++){
    somaLinha.push(arr1[i][j] + arr2[i][j])
  }
  resultado.push(somaLinha)
}

console.table(resultado)