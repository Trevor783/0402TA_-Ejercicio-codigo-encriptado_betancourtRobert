let edad = parseFloat(prompt("Introduce tu edad"));
let nivel = prompt ("Introduce tu nivel (junior, mid, senior).toLowerCase");
let numeroFavorito = prompt ("Número favorito");

let letra = edad <18 ? "x": edad <=35 ? "A" : edad <= 60 ? "B" : "C";
console.log(letra)
2
let primerNumero;
switch(nivel) {
    case "junior":
        primerNumero = 1;
        break;
    case "mid":
        primerNumero = 2;
        break;
    case "senior":
        primerNumero = 3;
        break;
    default:
        primerNumero = 0;
        }

let segundoNumero = (numeroFavorito % 2 === 0)
? primerNumero = 1 : numeroFavorito + 5;

let codigoSecreto = letra + primerNumero + segundoNumero;

alert("Tu código secreto es: " + codigoSecreto )


