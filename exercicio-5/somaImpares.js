// let array = [ 0, 3, 6, 9, 10];

export function somaImpares(array){
    let impar = array.filter(numero => (numero % 2 != 0));
    let resultado = 0;
    for (const numero of impar) {
        resultado += numero;
    }
    return resultado;
}