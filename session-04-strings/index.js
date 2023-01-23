//Crea un archivo JS que contenga las siguientes líneas

//Una cadena de texto con tu Nombre
let miNombre = "Luisa Fernanda ";

//Otra cadena de texto con tu Apellido
let miApellido = "Pinillos Villa";

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = miNombre.concat(miApellido);

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase();

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase();

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
let numeroLetras = estudiante.length;

//Una variable que contenga la primera letra del Nombre
let primeraLetra = estudiante.charAt(0);

//Otra variable que contenga la última letra del Apellido
let ultimaLetraApellido = estudiante.charAt(28);

//Una cadena de texto que elimine los espacios de la variable "estudiante"
let eliminarEspacios = estudiante.replace(/ /g, "");

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante" */
let palabraExiste = estudiante.includes(miNombre);
