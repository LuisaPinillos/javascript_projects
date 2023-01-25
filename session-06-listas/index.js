//Crea un archivo JS que contenga las siguientes líneas

//Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listaCompra = ["pollo", "pastas", "salsa", "champiñones", "pan"];

//Modifica la lista de la compra y añádele "Aceite de Girasol"
listaCompra.push("Aceite de Girasol");

//Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listaCompra.splice(5, 1);

//Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const peliculas = [
    {   titulo: "avatar2",
        director: "James Cameron",
        fecha: new Date (2022, 12, 15)
    },

    {   titulo: "Mi vecino Totoro", 
        director: "Hayao Miyazaki", 
        fecha: new Date(1988, 4, 16)
    },

    {   titulo: "Interestelar",  
        director: "Andrew Stanton",
        fecha: new Date(2014, 10, 26)
    }
];

//Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const newList = peliculas.filter(valor => valor.fecha > new Date(2010, 0, 1));
console.log(newList)

//Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const newArrayDirectores = peliculas.map(valor => {
    return valor.director;
});
console.log(newArrayDirectores );

//Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const newArrayTitulos = peliculas.map(titulo => {
    return titulo.titulo;
});
console.log(newArrayTitulos);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
const listaTitulosDirectores = newArrayDirectores.concat(newArrayTitulos);
console.log(listaTitulosDirectores);

//Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaPropagacion = [...newArrayDirectores, ...newArrayTitulos];
console.log(listaPropagacion);
