//let array = [1, 3, 6];
//console.log(multiplicaArray(array));

export function multiplicaArray(array){
    let total = 1;
    for (const numero of array) {
        total *= numero;
    }
    return total;
}