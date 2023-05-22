
// parametros de função

function soma (num1, num2) {
    return num1 * num2;
}


function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Bob', 22));

function multiplica (numero1, numero2) {
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3,3)));