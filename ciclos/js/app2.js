/*
Actividad 02:
Crea un algoritmo que le pida al usuario un número y luego utiliza while para evaluar
cuántos números son pares y cuantos impares, hasta que el usuario ingrese "salir".
*/

alert('VAS A INGRESAR NUMEROS Y TE DIRE CUANTOS NUMEROS PARES E IMPARES INGRESASTE');
alert('CUANDO NO DESEAS INGRESAR MAS NUMEROS ESCRIBE SALIR')


do{
    numero = parseInt(prompt('INGRESE UN NUMERO: '));
    if (numero % 2 == 0) {
        console.log(numero+' :NUMERO PAR');
    } else {
        console.log(numero+' :NUMERO IMPAR');
    }
}while (parseInt(numero)) 
    

