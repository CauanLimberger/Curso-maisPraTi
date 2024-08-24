const prompt = require('prompt-sync')()
// exercicio 1
//  let num1 = Number(prompt('digite um numero: '))

//  if (num1 > 0){
//     console.log("o numero é positivo");
//  }else if (num1 < 0) {
//     console.log("o numero é negativo");
//  }else if (num1 === 0){
//    console.log("o numero é zero");
// }
// else {
//     console.log("error, nessesario numero");
// }


// exercicio 2


// const year = Number(prompt('informe um ano: '))

// if ((year % 4 ===0 && year % 100 !==0  || (year % 400 ===0 ))){
//     console.log(`o ano ${year} é bissesto`)
// }else {
//     console.log(` o ano ${year} não é bissesto`);
// }

// exercicio 3

// let grade1 = Number(prompt('informe a primeira nota'))
// let grade2 = Number(prompt('informe a segunda nota'))
// let grade3 = Number(prompt('informe a terceira nota'))


// let avg = (grade1 + grade2 + grade3) /3
// let concept = ''

// if (avg >= 90 ){
//     console.log(`a media das notas é  ${avg.toFixed(2)}`);
//     concept = "A"
// }else if (avg <= 80){
//     console.log(`a media das notas é ${avg.toFixed(2)}`);
//     concept = "B"
// }else {
//     console.log(`outra nota `);
//     concept = "C"
// }

// console.log(`o conceito do aluno é ${concept}`);

// exercicio 9 

// let age = Number(prompt('informe a sua idade: '))

// let ageRange  
// if (age >= 0  && age <= 12){
//     ageRange = 'criança'
// }else if(age >= 13 && age <= 17){
//     ageRange = 'adolescente'
// }else if(age >= 18 && age <=60){
//     ageRange = 'adulto'

// }else {
//     console.log('idade invalida ');

// }

// switch(ageRange){
//     case 'criança':
//         console.log('voce é uma criança');
//         break;


//     case 'adolescente':
//         console.log('voce é um adolescente');
//         break;

//     case 'adulto': 
//     console.log('voce é um adulto');
//     break;

//     default:
//         console.log('idade invalida');
//         break;
// }

// exercicio 10

// let num1 = Number(prompt('informe o primeiro  numero: '))
// let num2 = Number(prompt('informe segundo numero: '))

// let a = num1
// let b = num2

// do{
//     let temp = b
//     b = a % b
//     a = temp
// }while(b !== 0 )


// const mdc =  a 

// console.log(`o maior divisor comum de ${num1} e ${num2} é  ${mdc}`);


// exercicio 11


// array

// let carros = Array()

// carros[0] = 'Civic'
// carros[1] =  10
// carros[2] = true
// carros['cauan'] = 10

// let motos = Array("CRB", "ninja", 10)
// let livros = ['senhor dos aneis', 'O hobbit , harry Potter']


// livros.push('sherlock')
// livros.unshift('misery')
// livros.pop(1)
// livros.splice(2)
// livros.shift()
// console.log(livros);

