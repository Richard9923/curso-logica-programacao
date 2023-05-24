 
 
 
 const sala1 = [1,2,3,4];
 const sala2 = [4,9,7,8];


function calculandoNota (notasDaSala) {
    const calculando = notasDaSala.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0) 
    const media = calculando / sala1.length;
    console.log(media);
}


console.log(calculandoNota(sala2)); 

