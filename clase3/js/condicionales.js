/*
    Hacer una pregunta al usuario
    - el usuario va a responder
    almacenar la respuesta en memoria
*/
let respuesta = prompt('¿qué seleccionado ganó el mundial Qatar 2022?');

//condicional
if( respuesta.toLowerCase() == 'argentina' ){
    //document.write('correcto');
    mensaje.innerHTML = '<img src="imgs/ok.png">';
}else{
    mensaje.innerHTML = '<img src="imgs/error.png">';
}