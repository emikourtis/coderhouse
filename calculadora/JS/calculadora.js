let numero1 = parseFloat(prompt('ingrese un numero'));
let numero2 = parseFloat(prompt('ingrese otro numero'));
let operacion = prompt('¿que operacion deseas realizar?, INGRESE EL SIGNO ¿suma (+), resta(-), multiplicacion(*) o division(/)? ');

let suma = numero1+numero2
let resta = numero1-numero2
let multiplicacion = numero1*numero2
let division = numero1/numero2

if(operacion == '+'){
    alert('la suma de '+ numero1 + ' + ' + numero2 + ' es igual a '+(suma));
    document.write('la suma de '+ numero1 + ' + ' + numero2 + ' es igual a '+(suma));
}else if(operacion == '-'){
    alert('la resta de '+ numero1 + ' - ' + numero2 + ' es igual a '+(resta));
    document.write('la resta de '+ numero1 + ' - ' + numero2 + ' es igual a '+(resta));
}else if(operacion == '*'){
    alert('la multiplicacion de '+ numero1 + ' * ' + numero2 + ' es igual a '+(multiplicacion));
    document.write('la multiplicacion de '+ numero1 + ' * ' + numero2 + ' es igual a '+(multiplicacion));
}else if(operacion == '/'){
    alert('la division de '+ numero1 + ' / ' + numero2 + ' es igual a '+(division));
    document.write('la division de '+ numero1 + ' / ' + numero2 + ' es igual a '+(division));
}else{
    alert('no es posible realizar la operacion intente nuevamente')
}