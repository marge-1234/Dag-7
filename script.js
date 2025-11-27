/*
zoom inn ctrl +
zoom ut ctrl -
() shift+7
"" shift+2
* shift+'
/ shift+7
{} alt gr+7
$ alt gr+4
inspiser vindu fn+f12
 */
console.log("hello world");

/*
Data typer:
string = tekst" "
Number = tall
Boolean = True/false =sant/Usant
*/

/*
Variabler:
const = konstant variabel som ikke kan bytte verdi
let = variabel som kan bytte verdi
var = utdatert variabel som kan bytte verdi men som ikke skal brukes
Const =
*/

const greeting = " God morgen";
//greeting = "god ettermidag";
console.log(greeting);
const username = "olav"
console.log(username); 
const time = 1044;
console.log(time);
const ispressent = true;


function userprofile() {
const name = "Julie";
const age = 28; 
const title = "veileder kodeloftet";
const isonline = true;

console.log( `jeg heter ${name}, og jeg er ${age} år gammel. jeg er ${title}. er jeg online? ${isonline}.`);

const text = document.querySelector("h1");
text.textContent = `jeg heter ${name}  ${age} år gammel. jeg er ${title}. er jeg online? ${isonline}`
}
userprofile();
 