
let resultado = rankear(200, 49)
console.log(resultado)

function rankear(vitorias, derrotas) {
    let ranking = (vitorias - derrotas)
    let nivel = ""

    if (ranking <= 10){
        nivel = `O herói tem de saldo ${ranking} e está no nível de ferro.`
    }

    else if (ranking >= 11 && ranking <= 20){
        nivel = `O herói tem de saldo ${ranking} e está no nível de bronze.`
    }

    else if (ranking >= 21 && ranking <= 50){
        nivel = `O herói tem de saldo ${ranking} e está no nível de prata.`
    }

    else if (ranking >= 51 && ranking <= 80){
        nivel = `O herói tem de saldo ${ranking} e está no nível de ouro.`
    }

    else if (ranking >= 81 && ranking <= 90){
        nivel = `O herói tem de saldo ${ranking} e está no nível de diamnate.`
    }

    else if (ranking >= 91 && ranking <= 100){
        nivel = `O herói tem de saldo ${ranking} e está no nível de lendário.`
    }

    else {
        nivel = `O herói tem de saldo ${ranking} e está no nível de imortal.`
    }

    return nivel
}