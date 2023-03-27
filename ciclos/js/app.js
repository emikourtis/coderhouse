/*
Actividad 01:
Crea un algoritmo que le pida al usuario que ingrese un número y luego evalúe si ese
número es par o impar.
*/
numero = parseInt(prompt('INGRESE UN NUMERO Y LE DIRE SI ES PAR O IMPAR'));

if(numero % 2 == 0){
    document.write('EL NUMERO ${numero} ES PAR');
    alert('EL NUMERO '+ numero + ' ES PAR');
}else if(numero % 2 != 0){  
    document.write('EL NUMERO ${numero} ES IMPAR');
    alert('EL NUMERO ${numero} ES IMPAR');
}else{
    alert('ERROR');
}
