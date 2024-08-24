const professor = {
    name: "John Doe",
    age: 45,
    subject: "Mathematics",

    grades: {
        ana: 10,
        jose: 5,
        maria: 6
    }
}
let sumGrades = 0 
let numberOfStudents = 0

for (let student in  professor.grades){
    sumGrades += professor.grades[student]
    numberOfStudents++
}


let avarage =  sumGrades / numberOfStudents

// console.log(`a nota media é: ${avarage.toFixed(2)} `);
// console.log(avarage >= 6
//     ? `${professor.name} esta acima da media`
//     : `${professor.name} esta abaixo da media`
// 

const livraria = [

    {title : "o Hobbit", author: "J.R.R Tolkien ", year: 1925 },
    {title : "prisioneiro de azkaban", author: "J.K. Rolling ", year: 1999},
    {title : "narnia ", author: "C.S Lewis ", year: 2010 }
    
]

for(let book of livraria){
    if (book.year < 2000){
        // console.log(`o livro ${book.title}, escrito por ${book.author}, foi escrito em ${book.year}`)
        
    }
}


const filmes =[
    {title: 'alien', genero : 'terror'},
    {title: 'alien 4', genero : 'terror'},
    {title: 'alien 2', genero : 'ação'},
    {title: 'vingadores', genero : 'heroi'}
]

let generoCount = {}


filmes.forEach(movie => {
    if(generoCount[movie.genero]){
        generoCount[movie.genero]++
    }else {
        generoCount[movie.genero] = 1
    }
})


for (let genre in generoCount){
    console.log(`exitem ${generoCount[genre]} filems  do ${genre}`);
    
}
