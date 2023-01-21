// Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

let num = 10;
let i = 1;
let factorial = 1;

while (i <= num) {

    if (i === 10) {
        break;
    }
    
    factorial *= i;
    console.log(factorial);
    i ++;
}
