//Crea un archivo JS que contenga las siguientes líneas

//Una variable que contenga tu altura en centímetros (entero)
let miAlturaCm = 157;

// Una variable que contenga tu altura en metros (número de coma flotante)
let miAlturaM =  1.57; 

//Una variable que contenga tu peso en kilogramos (número de coma flotante)
let miPesoKg = 45.3;

//Una variable que contenga tu altura en metros redondeada hacia arriba
let alturaRedondeada = miAlturaM.toPrecision(1);
let alturaRed2 = Math.ceil(miAlturaM);

//Una variable que contenga tu peso en kilogramos redondeado hacia abajo
let pesoRedondeado = miPesoKg.toFixed();
let pesoRed2 = Math.floor(miPesoKg);

//Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
let siSonIguales = Number.MIN_VALUE + 1 === Number.MAX_VALUE;
