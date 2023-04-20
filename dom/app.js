const frutas = ['anana', 'banana', 'durazno', 'kiwi', 'manzana', 'papaya', 'pera'];

const cargarDOM = () =>{
    const titulo = document.getElementById('titulo');
    titulo.innerText = 'www.mandafruta.com';
    frutas.forEach(fruta =>{
        const lista = document.getElementById('listado');
        const elementoFruta = document.createElement('li');
        elementoFruta.innerText = fruta;
        lista.appendChild(elementoFruta);
    });
    
};
cargarDOM();