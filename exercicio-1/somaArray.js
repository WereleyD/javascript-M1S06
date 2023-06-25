//let array = [1, 3, 6];
//console.log(somaArray(array));

export function somaArray(array){
    let total = 0;
    for (const numero of array) {
        total += numero;
    }
    return total;
}