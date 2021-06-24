var hola = prompt("Hola Fashionista =), ¿Podrías decirnos tu nombre?.");
var edad = parseInt(prompt("Ahora si te podemos saludar correctamente, Hola "+hola+" , cuéntanos cuantos años tienes."));
var sexo = prompt("Genial!!!, ya sabemos que te llamas "+hola+" y que tienes "+edad+" años, por último indicanos tu sexo, M para masculino, F para femenino o si no lo quieres aclarar deja el espacio en blanco.");
var gracias = alert("Gracias por tu tiempo ,"+hola+" y por visitar nuestro sitio.")
var bSexo = (sexo == "M") || (sexo == "F") || (sexo == "m") || (sexo == "f");
var nSexo = (sexo == "");
var condDatos = bSexo;
var conDatosN = nSexo;
if (condDatos) console.log("El usuario que acaba de ingresar tiene "+edad+" años y es del sexo "+sexo+".");

if (conDatosN) console.log("El usuario que acaba de ingresar tiene "+edad+" años y no quiere aclarar cual es su sexo");
