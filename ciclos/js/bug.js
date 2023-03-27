/*Actividad 01:
let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 0; index < cantidad; index) {
console.log(texto);
}*/


let cantidad = parseInt(prompt('INGRESE CANTIDAD DE REPETICIONES'));
let texto = prompt('INGRESE TEXTO A REPETIR');
for (let index = 1 ;index <= cantidad; index++){
    console.log(texto);
    document.write(index+"-"+texto+"</br>")
};