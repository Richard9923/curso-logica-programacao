const idadeMinima = 18;
const idadeCliente = 22;

const comparacao = idadeCliente >= idadeMinima ? 'Cerveja' : 'Suco';
const texto = `O cliente com a idade de ${idadeCliente} anos, poderá tomar ${comparacao}.`;
console.log(texto);

