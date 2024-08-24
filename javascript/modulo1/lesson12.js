// // let serie = {
// //     nome: "the boys",
// //     genero: ["Ação, parodia"],
// //     temporadas: 4,
// //     status: "em andamento",
// //     classicaçao: 18,
// //     nEP: {
// //         temp1: 13,
// //         temp2: 15,
// //         temp3: 13,
// //         temp4: 8
// //     },

// //     mostrarCaracteristicas: function () {
// //         return `o nome da serie é : ${this.nome} e sua classicação é : +${this.classicaçao}`
// //     }
// // }

// // console.log(serie.mostrarCaracteristicas());

// let livro = {
//     genero: 'fantasia',
//     autor: 'George Martin',
//     nome: 'game of thones',
//     typeCap: 'dura',
//     pag: '465',


// }

function computador(processador, gpu, ram, armazenamento) {
    this.processador = processador;
    this.gpu = gpu;
    this.ram = ram;
    this.armazenamento = armazenamento;

    this.ligar = function () {
        // console.log(`o ${this.processador} esta funcionando!`);

    }
    this.mostrarEspecificacao = function () {
        return(
            `prcessador: ${this.processador} 
            GPU: ${this.gpu}
            RAM: ${this.ram}
            Armazenamento: ${this.armazenamento}`)

    }


}

let pc = new computador("i9" , "RTX4090", "16gb" , "512gb SSD")
// console.log(pc.mostrarEspecificacao())



function jogos(titulo, genero, anoLancamento , empresa){
    return {

        titulo,
        genero,
        anoLancamento,
        empresa
        
    }
}

let jogo1 = jogos("Red Dead Redemption 2", "accao-aventura", 2018, "Rockstar Games")

// console.log(jogo1);


let carro = {
    modelo : "bugattivo",
    ano : 2020,
    cor : "preto",
    acelerar : function(){
        // console.log("Acelerando");
    }
}

for (let key in carro){
    // console.log(`${key}: ${carro[key]}`);
}

const jogadores = [['pele , romario'],'cr7 ','messi']
for (let jogador of jogadores){
    console.log(jogador);
    
}