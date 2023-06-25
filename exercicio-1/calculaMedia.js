//let array = [1, 3, 6];
//console.log(calculaMedia(array));

export function calculaMedia(array){
    let total = 0;
    for (const numero of array) {
        total += numero;
    }
    return (total / array.length).toFixed(2);
}