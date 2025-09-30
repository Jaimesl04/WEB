// Pedir la edad
let edadTexto = prompt("¿Cuál es tu edad?");

// Convertir la entrada del texto a número
let edad = parseInt(edadTexto);

// Comprobar si la edad es válida
if (isNaN(edad)) {
    alert("Formato inválido para la edad");
} else {
    // Mostrar mensaje según el rango de edad
    if (edad >= 18) {
        alert("Eres mayor de edad");
    } else if (edad >= 13 && edad <= 17) {
        alert("Eres adolescente");
    } else if (edad <= 12 && edad >= 0) {
        alert("Eres un niño");
    } else if (edad < 0) {
        alert("Formato inválido, el número de la edad debe estar en positivo")
    }
}