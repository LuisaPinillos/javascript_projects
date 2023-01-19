/*  Crea un nuevo archivo JS que contenga una lista con los siguientes elementos:
- Tu nombre (string)
- Tu edad (number)
- ¿Eres desarrollador? (boolean)
- Tu fecha de nacimiento (Date)
- Tu libro favorito (Objeto con propiedades: titulo, autor, fecha, url) */


const date = new Date("junio 20 1997");
const favoriteBook = { 
    titulo: "El resplandor",
    autor: "Stephen King",
    fecha: 1977,
    url: "https://gualeguaychu.gov.ar/apps/dashboard/ftp/biblioteca/45/45.pdf",
};

const me = new Array("Luisa", 25, true, date, favoriteBook);
console.log(me)
